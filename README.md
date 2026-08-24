# Vast Browser Docs

This repository contains the public documentation for [Vast Browser](https://vastbrowser.com), published at [docs.vastbrowser.com](https://docs.vastbrowser.com). It uses Astro, Starlight, Markdown, and MDX.

## Local development

Use the locked npm dependency set:

```bash
npm ci
npm run dev
```

Run the same content and production checks used before deployment:

```bash
npm test
npm run build
```

## Documentation structure

Pages live in `src/content/docs/` and are grouped by product area. Each page needs a concise `title` and `description` in frontmatter. Use Markdown for normal pages and MDX only when a page needs an Astro component.

Navigation order is explicit in `astro.config.mjs`. Adding a page file does not add it to the sidebar automatically; add its content slug to the appropriate sidebar group.

Internal links should be root-relative documentation routes, such as `/using-vast/tabs-and-workspaces/`. Run `npm run validate` to catch missing routes, stale GitBook links, duplicate titles, and migration artifacts.

## Deployment

The site is a static Astro build. Cloudflare Workers Builds installs with `npm ci`, runs `npm run build`, and deploys `dist/` through Workers Static Assets. `main` is the production branch; non-production branches can create preview versions.

For a manual deployment from an authenticated environment:

```bash
npm run deploy
```

## Contributing

Keep product claims factual and verify behavior against the current Vast source. Mark Labs and experimental features clearly. Prefer short examples and direct task-oriented prose.

Never document or commit Vast private infrastructure, credentials, signing material, privileged channel details, private service topology, anti-abuse internals, secrets, certificates, tokens, or private Cloudflare configuration. Describe public user-visible guarantees instead.
