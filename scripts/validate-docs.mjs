import { readFile, readdir } from 'node:fs/promises';
import { extname, join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../src/content/docs/', import.meta.url));
const failures = [];
const files = [];

async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) await walk(path);
    else if (['.md', '.mdx'].includes(extname(entry.name))) files.push(path);
  }
}

await walk(root);

const routeFor = (file) => {
  const name = relative(root, file).split(sep).join('/').replace(/\.(md|mdx)$/, '');
  return name === 'index' ? '/' : `/${name}/`;
};

const routes = new Set(files.map(routeFor));
const titles = new Map();

for (const file of files) {
  const source = (await readFile(file, 'utf8')).replaceAll('\r\n', '\n');
  const display = relative(root, file).split(sep).join('/');
  const frontmatter = source.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
  const title = frontmatter.match(/^title:\s*["']?([^\n"']+)/m)?.[1]?.trim();
  const description = frontmatter.match(/^description:\s*["']?([^\n"']+)/m)?.[1]?.trim();
  if (!title) failures.push(`${display}: missing title frontmatter`);
  if (!description) failures.push(`${display}: missing description frontmatter`);
  if (display !== 'index.mdx' && /^#\s+/m.test(source.replace(/^---[\s\S]*?---\s*/, ''))) failures.push(`${display}: duplicate H1`);
  if (/gitbook\.io|\{%|\{% endhint|\/pages\/[A-Za-z0-9]+/.test(source)) failures.push(`${display}: contains a GitBook migration artifact`);
  if (/\b(?:relay\.vastbrowser\.com|controlpanel\.vastbrowser\.com)\b|vast:(?:relay|storage|passwords|network|browser):/.test(source)) failures.push(`${display}: contains a prohibited private implementation reference`);
  if (title) {
    if (titles.has(title)) failures.push(`${display}: duplicate title also used by ${titles.get(title)}`);
    titles.set(title, display);
  }

  for (const match of source.matchAll(/\]\((\/[A-Za-z0-9_./-]+)(?:#[^)]+)?\)/g)) {
    const target = match[1].endsWith('/') ? match[1] : `${match[1]}/`;
    if (!routes.has(target) && !target.startsWith('/assets/') && !target.startsWith('/logos/')) {
      failures.push(`${display}: broken internal link ${match[1]}`);
    }
  }
}

if (files.length < 40) failures.push(`expected at least 40 documentation pages, found ${files.length}`);

if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Validated ${files.length} documentation pages.`);
}
