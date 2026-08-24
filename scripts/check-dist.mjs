import { access, readFile, readdir } from 'node:fs/promises';
import { extname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../dist/', import.meta.url));
const failures = [];
const htmlFiles = [];

async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) await walk(path);
    else if (extname(entry.name) === '.html') htmlFiles.push(path);
  }
}

const exists = async (path) => access(path).then(() => true, () => false);
const routePath = (pathname) => {
  const clean = pathname.replace(/^\/+/, '').replace(/\/$/, '');
  return clean ? join(root, clean, 'index.html') : join(root, 'index.html');
};

await walk(root);

for (const file of htmlFiles) {
  const source = await readFile(file, 'utf8');
  const display = relative(root, file).split(sep).join('/');
  const ids = new Set([...source.matchAll(/\s(?:id|name)=["']([^"']+)["']/g)].map((match) => match[1]));

  for (const match of source.matchAll(/\shref=["']([^"']+)["']/g)) {
    const href = match[1];
    if (/^(?:https?:|mailto:|tel:|data:|javascript:)/i.test(href)) continue;

    if (href.startsWith('#')) {
      const anchor = decodeURIComponent(href.slice(1));
      if (anchor && !ids.has(anchor)) failures.push(`${display}: missing local anchor ${href}`);
      continue;
    }

    const parsed = new URL(href, 'https://docs.vastbrowser.com/');
    const pathname = decodeURIComponent(parsed.pathname);
    const candidate = pathname.endsWith('/') || !extname(pathname)
      ? routePath(pathname)
      : resolve(root, pathname.replace(/^\/+/, ''));
    const relativeCandidate = relative(root, candidate);
    if (relativeCandidate.startsWith(`..${sep}`) || relativeCandidate === '..') {
      failures.push(`${display}: link escapes output directory ${href}`);
      continue;
    }
    if (!(await exists(candidate))) {
      failures.push(`${display}: missing output target ${href}`);
      continue;
    }

    if (parsed.hash && candidate.endsWith('.html')) {
      const target = await readFile(candidate, 'utf8');
      const anchor = decodeURIComponent(parsed.hash.slice(1));
      const pattern = new RegExp(`\\s(?:id|name)=["']${anchor.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["']`);
      if (!pattern.test(target)) failures.push(`${display}: missing target anchor ${href}`);
    }
  }
}

for (const required of ['404.html', 'robots.txt', 'sitemap-index.xml', 'pagefind/pagefind.js', 'og.png']) {
  if (!(await exists(join(root, required)))) failures.push(`missing required build artifact ${required}`);
}

if (htmlFiles.length < 40) failures.push(`expected at least 40 rendered HTML pages, found ${htmlFiles.length}`);

if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Checked ${htmlFiles.length} rendered HTML pages and their local links.`);
}
