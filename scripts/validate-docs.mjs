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
  if (/^#\s+/m.test(source.replace(/^---[\s\S]*?---\s*/, ''))) failures.push(`${display}: duplicate H1`);
  if (/gitbook\.io|\{%|\{% endhint|\/pages\/[A-Za-z0-9]+/.test(source)) failures.push(`${display}: contains a GitBook migration artifact`);
  if (/\b(?:relay\.vastbrowser\.com|controlpanel\.vastbrowser\.com)\b|vast:(?:relay|storage|passwords|network|browser):/.test(source)) failures.push(`${display}: contains a prohibited private implementation reference`);
  if (/current 0\.(?:4\.[23]|5\.0) release|0\.(?:4\.[23]|5\.0)\*\* is the current direct|current direct release(?: is)?,? `?0\.5\.0/i.test(source)) failures.push(`${display}: outdated current-release claim`);
  if (!display.startsWith('releases/')) {
    if (/Labs (?:is |start[s]? )?disabled on a fresh profile|Vast Labs disabled|vault starts locked|Provides a local encrypted credential vault|Labs-gated local password vault|Password Manager\s*\|\s*Labs/.test(source)) failures.push(`${display}: obsolete native password or Labs-default guidance`);
    if (/vast:\/\/passwords/.test(source) && !/retired/i.test(source)) failures.push(`${display}: active retired passwords route`);
  }
  if (display === 'developers/internal-pages.md') {
    const routeTable = source.match(/^\| Route[^\n]*\n\|[- |]+\n(?:\|[^\n]*\n)+/m)?.[0] ?? '';
    for (const route of ['vast://automation', 'vast://network', 'vast://diagnostics']) {
      if (!routeTable.includes('`' + route + '`')) failures.push(`${display}: ${route} must remain inside the route table`);
    }
  }
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

const extensions = await readFile(join(root, 'extensions/extensions.md'), 'utf8');
if (!/listing URL/i.test(extensions) || !/Install in Vast/.test(extensions) || /navigation remains guarded/i.test(extensions)) failures.push('extensions: must describe in-store Install in Vast and listing-URL installs, without the retired guarded-navigation claim');
if (!/Manifest V2 extensions that block web requests/.test(extensions)) failures.push('extensions: must explain that MV2 blocking-webRequest extensions are not loaded');
const policies = await readFile(join(root, 'extensions/publishing-and-policies.md'), 'utf8');
if (!policies.includes('GPL-3.0-only') || /MIT License applies to Vast-owned/.test(policies)) failures.push('publishing policies: must identify GPL-3.0-only desktop source separately from third-party licenses');
const config = await readFile(new URL('../astro.config.mjs', import.meta.url), 'utf8');
if (!routes.has('/releases/0-5-5/')) failures.push('missing current 0.5.5 release page');
if (!config.includes("'releases/0-5-5'")) failures.push('missing 0.5.5 sidebar release entry');
if (!routes.has('/releases/0-5-0/')) failures.push('missing historical 0.5.0 release page');
const currentRelease = await readFile(join(root, 'releases/0-5-5.md'), 'utf8');
if (!/0\.5\.4 was published earlier the same day and withdrawn/.test(currentRelease)) failures.push('0.5.5 release notes: must disclose the withdrawn 0.5.4');
for (const heading of ["What's new", 'Improvements and fixes', 'Important upgrade information', 'Known limitations']) {
  if (!currentRelease.includes(`## ${heading}`)) failures.push(`0.5.5 release notes: missing ${heading} section`);
}

if (files.length < 40) failures.push(`expected at least 40 documentation pages, found ${files.length}`);

if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Validated ${files.length} documentation pages.`);
}
