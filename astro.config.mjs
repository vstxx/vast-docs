import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';

const description = 'The complete guide to Vast Browser — browsing, workspaces, privacy, local tools, Labs, extensions and development.';

export default defineConfig({
  site: 'https://docs.vastbrowser.com',
  integrations: [
    starlight({
      title: 'Vast Browser Docs',
      description,
      favicon: '/favicon.png',
      logo: {
        src: './src/assets/vast-icon.png',
        alt: 'Vast',
      },
      social: [
        { icon: 'external', label: 'Vast website', href: 'https://vastbrowser.com' },
        { icon: 'github', label: 'Vast on GitHub', href: 'https://github.com/vstxx/vast-public' },
      ],
      editLink: {
        baseUrl: 'https://github.com/vstxx/vast-docs/edit/main/',
      },
      customCss: ['./src/styles/vast.css'],
      pagefind: true,
      lastUpdated: true,
      pagination: true,
      head: [
        { tag: 'meta', attrs: { property: 'og:site_name', content: 'Vast Browser Docs' } },
        { tag: 'meta', attrs: { property: 'og:type', content: 'website' } },
        { tag: 'meta', attrs: { property: 'og:image', content: 'https://docs.vastbrowser.com/og.png' } },
        { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
        { tag: 'meta', attrs: { name: 'twitter:image', content: 'https://docs.vastbrowser.com/og.png' } },
        { tag: 'link', attrs: { rel: 'sitemap', href: '/sitemap-index.xml' } },
      ],
      sidebar: [
        { label: 'Documentation home', slug: 'index' },
        {
          label: 'Get Started',
          collapsed: true,
          items: ['get-started/getting-started', 'get-started/installation-and-updates'],
        },
        {
          label: 'Using Vast',
          collapsed: true,
          items: [
            'using-vast/browsing-and-navigation',
            'using-vast/interface-and-layouts',
            'using-vast/tabs-and-workspaces',
            'using-vast/new-tab',
            'using-vast/command-palette',
            'using-vast/bookmarks-and-reading-list',
            'using-vast/history-and-downloads',
            'using-vast/side-panel-and-focus-mode',
            'using-vast/keyboard-shortcuts',
            'using-vast/search-startup-and-session-restore',
          ],
        },
        {
          label: 'Tools',
          collapsed: true,
          items: ['tools/local-tools', 'tools/notes', 'tools/pdf-viewer', 'tools/session-timeline'],
        },
        {
          label: 'Privacy & Security',
          collapsed: true,
          items: [
            'privacy/privacy-and-security',
            'privacy/privacy-controls-reference',
            'privacy/site-data-and-permissions',
            'privacy/data-backup-and-migration',
            'privacy/spoofing-tools',
            'privacy/advanced-diagnostics',
          ],
        },
        {
          label: 'Extensions',
          collapsed: true,
          items: ['extensions/extensions', 'extensions/extension-development'],
        },
        {
          label: 'Vast Labs',
          collapsed: true,
          items: ['labs/vast-labs', 'labs/automation', 'labs/password-manager', 'labs/network-devices', 'labs/video-and-audio'],
        },
        {
          label: 'Customization',
          collapsed: true,
          items: ['customization/appearance-reference', 'customization/settings-reference', 'customization/cat-addon'],
        },
        {
          label: 'Developers',
          collapsed: true,
          items: [
            'developers/developer-guide',
            'developers/architecture-overview',
            'developers/internal-pages',
            'developers/feature-availability',
            'developers/known-limits',
            'developers/troubleshooting',
            'developers/faq',
          ],
        },
      ],
    }),
    sitemap(),
  ],
});
