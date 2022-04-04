const lightCodeTheme = require('prism-react-renderer/themes/github').default;
const darkCodeTheme = require('prism-react-renderer/themes/dracula').default;

const plugins = [];

// Reverse the sidebar items ordering (including nested category items)
function removeAcceptanceTests(items) {
  return items.filter((item) => {
    return (
      item.type === 'category' ||
      (item.type === 'doc' && !/\.acceptance/.test(item.id))
    );
  });
}

if (
  typeof process !== 'undefined' &&
  process.env.NEXT_PUBLIC_ANALYTICS_WRITE_KEY
) {
  plugins.push([
    'docusaurus-plugin-segment',
    {
      apiKey: process.env.NEXT_PUBLIC_ANALYTICS_WRITE_KEY,
    },
  ]);
}

const algoliaConfig = require('./algolia.config');
const baseName = require('./base.config');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Decipad',
  tagline: 'Make sense of numbers',
  url: baseName(),
  baseUrl: '/docs/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/img/deci-logo-brand.png',
  organizationName: 'decipad', // Usually your GitHub org/user name.
  projectName: 'decipad', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/decipad/documentation/edit/main',
          async sidebarItemsGenerator({
            defaultSidebarItemsGenerator,
            ...args
          }) {
            const sidebarItems = await defaultSidebarItemsGenerator(args);
            return removeAcceptanceTests(sidebarItems);
          },
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/decipad/documentation/edit/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins,

  themes: ['./src/lib/deci-language-live-codeblock'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
        switchConfig: {
          darkIcon: ' ',
          lightIcon: ' ',
        },
      },
      navbar: {
        title: 'Decipad',
        logo: {
          alt: 'Decipad',
          src: '/img/deci-logo-brand.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'quick-start/get-started-with-decipad',
            position: 'left',
            label: 'Getting started',
          },
          {
            type: 'doc',
            docId: 'get-inspiration',
            position: 'left',
            label: 'Get Inspiration',
          },
          {
            type: 'doc',
            docId: 'quick-start/help-and-support',
            position: 'left',
            label: 'Support',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Getting started',
                to: '/docs/quick-start/get-started-with-decipad',
              },
              {
                label: 'Help & Support',
                to: '/docs/quick-start/help-and-support',
              },
              {
                label: 'Technical Documentation',
                to: '/docs/language',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/decipad',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/HwDMqwbGmc',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/decipad',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Website',
                to: 'https://decipad.com',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/decipad/documentation',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} N1N, Ltd.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: algoliaConfig(),
    }),
};

// eslint-disable-next-line no-console
console.log('algolia config:', config.themeConfig.algolia);

module.exports = config;
