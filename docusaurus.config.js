// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Doongz\'s Site',
  tagline: 'Hi there',
  url: 'https://doongz.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'doongz', // Usually your GitHub org/user name.
  projectName: 'doongz.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages', // CURRENT_BRANCH(main) deploy to deploymentBranch(gh-pages)

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    [
      'content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'community',
        path: 'community', // docs外面的文档，但路径只能是一层
        routeBasePath: 'community',
        // editUrl: ({locale, versionDocsDirPath, docPath}) => {
        //   if (locale !== 'en') {
        //     return `https://crowdin.com/project/docusaurus-v2/${locale}`;
        //   }
        //   return `https://github.com/facebook/docusaurus/edit/main/website/${versionDocsDirPath}/${docPath}`;
        // },
        // remarkPlugins: [npm2yarn],
        // editCurrentVersion: true,
        sidebarPath: require.resolve('./sidebarsCommunity.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Home page',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Notes',
          },
          {
            to: '/community/support',
            label: 'Community',
            position: 'left',
            activeBaseRegex: `/community/`,
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'dropdown',
            label: 'Courses',
            position: 'left',
            items: [
              {
                label: 'Machine Learning Compilation',
                href: 'https://github.com/doongz/mlc-ai',
              },
              {
                label: 'Stanford CS229: Machine Learning',
                href: 'https://github.com/doongz/cs229',
              },
              {
                label: '中国科学院 智能计算系统',
                href: 'https://github.com/doongz/aics',
              },
              {
                label: 'Harvard CS50’s Introduction to AI with Python',
                href: 'https://github.com/doongz/cs50-ai',
              },
              {
                label: 'MIT-6.824 Distributed Systems',
                href: 'https://github.com/doongz/mit-6.824',
              },
              {
                label: '南京大学 操作系统：设计与实现',
                href: 'https://github.com/doongz/os-workbench',
              },
              {
                label: 'MIT-6.S081 Operating Systems Engineering',
                href: 'https://github.com/doongz/mit-6.s081',
              },
              // ... more items
            ],
          },
          {
            href: 'https://github.com/doongz',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Doongz Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
