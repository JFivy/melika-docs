// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Melika',
  tagline: 'Plataforma de Gestión Médica',
  favicon: 'img/favicon.ico',

  url: 'https://tu-sitio-melika.com', 
  baseUrl: '/',

  organizationName: 'tu-usuario', // Puedes cambiarlo por tu usuario de GitHub
  projectName: 'melika', // El nombre de tu repositorio

  onBrokenLinks: 'throw',

  // Cambiado a español
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
          // Se eliminó editUrl para no enlazar al GitHub de Docusaurus
        },
        // ¡Magia! Esto desactiva el blog por completo
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
          src: 'img/logo.svg', // Si tienes un logo propio, asegúrate de que se llame logo.svg en la carpeta static/img/
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentación',
          },
          // Se eliminó el enlace del Blog de aquí
          {
            href: 'https://github.com/tu-usuario/melika', // Cambia esto por la URL de tu repositorio
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
                to: '/docs/descargas-melika', // Redirige directo a tu página
              },
            ],
          },
          {
            title: 'Proyecto',
            items: [
              {
                label: 'Repositorio GitHub',
                href: 'https://github.com/tu-usuario/melika',
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