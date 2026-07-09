// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Melika',
  tagline: 'Plataforma de Gestión Médica',
  favicon: 'img/favicon.ico',

  // --- CONFIGURACIÓN EXACTA PARA GITHUB PAGES ---
  url: 'https://JFivy.github.io', 
  baseUrl: '/melika-docs/',
  organizationName: 'JFivy', 
  projectName: 'melika-docs', 
  trailingSlash: false,
  // ----------------------------------------------

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false, 
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Melika',
        logo: {
          alt: 'Logo Melika',
          src: 'img/logo.svg', 
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentación',
          },
          {
            href: 'https://github.com/JFivy/melika-docs', 
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
                label: 'Entregables y Descargas',
                to: '/docs/descargas-melika', 
              },
            ],
          },
          {
            title: 'Proyecto',
            items: [
              {
                label: 'Repositorio GitHub',
                href: 'https://github.com/JFivy/melika-docs', 
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Proyecto Melika. Construido con Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;