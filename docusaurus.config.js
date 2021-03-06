const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// import { css, jsx } from '@emotion/react'


/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {

  title: 'Practical Data Science',
  tagline: 'A gentle introduction to everything data',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/signet_ude_primary.svg',
  
  url: 'https://zesch.github.io',
  baseUrl: '/practical-data-science/',
  organizationName: 'zesch', // Usually your GitHub org/user name.
  projectName: 'practical-data-science', // Usually your repo name.
  customFields: {
    trailingSlash: true,
    taglines: [
      "Taming wild data",
      "The survivor's guide to Data Literacy",
      "A gentle Introduction to everything Data",
      "How to make Graphs and influence Data",
      "What is a Power User and how can I become one?",
      "Becoming a Power User in 12 easy steps",
      "Automate all the things - Data Literacy for Power Users",
      "Data Handling made easy",
      "I wish they had taught me this about data",
      "No more Excel - Automating Data Handling",
      "Excel users hate this trick - Automating Data Handling",
      "Of Pandas, Penguins and Snakes - Tools to automate Data Analysis",
      "Datmancy",
      "How to become a datamancer",
      "Advanced Data Literacy or: How I Learned to Stop Worrying and Love the Data"
    ]
  },
  
  // themes: ['@docusaurus/theme-classic'],
  themeConfig: {
    colorMode: {
      switchConfig:{
        darkIcon: ' ',
        lightIcon: ' ',

      }
    },
    navbar: {
      title: 'Practical Data Science',
      logo: {
        alt: 'UDE signet',
        src: 'img/ude/signet_ude_primary.svg',
      },
      items: [
        {to: '/docs/01/01', label: 'Lectures', position: 'left'},
        {to: '/setup', label: 'Setup', position: 'left'}
      ],
    },
    footer: {
      style: 'light',
      logo: {
        alt: 'Universität Duisburg-Essen Logo',
        src: 'img/ude/logo_claim_negativ.svg',
        href: 'https://www.uni-due.de',
      },
      // github: {
      //   alt: 'Universität Duisburg-Essen Logo',
      //   src: 'img/ude/logo_claim_negativ.svg',
      //   href: 'https://www.uni-due.de',
      // },
      copyright: `
        <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener noreferrer">
          <img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" />
        </a>`,
      links: []
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [require.resolve("@easyops-cn/docusaurus-search-local"),{
      hashed: true
    }]
  ],
};
