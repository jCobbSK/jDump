/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'jDump',
  tagline: 'Mind dump',
  url: 'https://jdump.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'jCobbSK', // Usually your GitHub org/user name.
  projectName: 'jDump', // Usually your repo name.
  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'jDump',
      logo: {
        alt: 'Logo of jDump',
        src: 'img/logo.png',
        srcDark: 'img/logo_white.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Get smart',
        },
        {to: '/blog', label: 'Mind dump', position: 'left'},
      ],
    },
    footer: {
      links: [
        {
          title: 'About me',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/jcobbsk',
            },
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com/in/kanitra',
            },
            {
              label: 'Stackoverflow',
              href: 'https://stackoverflow.com/users/4344993/jcobb',
            },
          ],
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Dump, Inc. Built with Docusaurus.`,
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
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
