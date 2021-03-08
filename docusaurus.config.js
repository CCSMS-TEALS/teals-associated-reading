require('dotenv').config()

module.exports = {
  title: 'Think Python - Abridged',
  tagline: 'Abridged Adaptation of "Think Python by Allen Downey"',
  url: 'https://CCSMS-TEALS.github.io',
  baseUrl: process.env.PROD_BASE_URL || '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'CCSMS-TEALS', // Usually your GitHub org/user name.
  projectName: 'teals-associated-reading', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'TEALS Associated Reading',
      logo: {
        alt: 'TEALS Logo',
        src: 'img/favicon.ico',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Readings',
          position: 'left',
        },
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      // links: [
      //   {
      //     title: 'Docs',
      //     items: [
      //       {
      //         label: 'Style Guide',
      //         to: 'docs/',
      //       },
      //       {
      //         label: 'Second Doc',
      //         to: 'docs/doc2/',
      //       },
      //     ],
      //   }
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} CCSMS - TEALS. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/CCSMS-TEALS/teals-associated-reading/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/CCSMS-TEALS/teals-associated-reading/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
