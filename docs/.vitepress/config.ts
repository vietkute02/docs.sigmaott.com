import { defineConfig } from 'vitepress'

const ogDescription = 'Next Generation Frontend Tooling'
const ogImage = 'https://main.vitejs.dev/og-image.png'
const ogTitle = 'Vite'
const ogUrl = 'https://main.vitejs.dev'

export default defineConfig({
  title: 'Sigma Streaming Platform',
  description: 'Modern Streaming Platform',

  base: '/',

  head: [
    [
      'script',
      {
        type: 'text/javascript',
        src: 'https://unpkg.com/@stoplight/elements/web-components.min.js'
      }
    ],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: ogTitle }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'twitter:description', content: ogDescription }],
    ['meta', { property: 'twitter:title', content: ogTitle }],
    ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { property: 'twitter:image', content: ogImage }],
    ['meta', { property: 'twitter:url', content: ogUrl }]
  ],

  vue: {
    reactivityTransform: true
  },

  themeConfig: {
    logo: '/logo.svg',

    // editLink: {
    //   pattern: 'https://github.com/vitejs/vite/edit/main/docs/:path',
    //   text: 'Suggest changes to this page'
    // },

    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/vite_js' },
      { icon: 'discord', link: 'https://chat.vitejs.dev' },
      { icon: 'github', link: 'https://github.com/vitejs/vite' }
    ],

    algolia: {
      apiKey: 'b573aa848fd57fb47d693b531297403c',
      indexName: 'vitejs',
      searchParameters: {
        facetFilters: ['tags:en']
      }
    },

    // carbonAds: {
    //   code: 'CEBIEK3N',
    //   placement: 'vitejsdev'
    // },

    // localeLinks: {
    //   text: 'English',
    //   items: [
    //     { text: '简体中文', link: 'https://cn.vitejs.dev' },
    //     { text: '日本語', link: 'https://ja.vitejs.dev' },
    //     { text: 'Español', link: 'https://es.vitejs.dev' }
    //   ]
    // },

    footer: {
      copyright: 'Copyright © 2018-present Thudo JSC'
    },

    nav: [
      {
        text: 'Guide',
        items: [
          { text: 'Sigma Interactive', link: '/sigma-interactive/' },
          { text: 'Sigma Livestream', link: '/sigma-livestream/' },
          { text: 'Sigma Transcode Live', link: '/sigma-transcode-live/' }
        ]
      },
      // { text: 'Guide', link: '/guide/', activeMatch: '/guide/' },
      { text: 'Config', link: '/config/', activeMatch: '/config/' },
      { text: 'Plugins', link: '/plugins/', activeMatch: '/plugins/' },
      {
        text: 'Apis',
        items: [
          { text: 'Sigma Interactive Apis', link: '/apis/sigma-interactive' },
          {
            text: 'Sigma Linear Right Management Apis',
            link: '/apis/sigma-lrm'
          },
          {
            text: 'Sigma Transcode Live Apis',
            link: '/apis/sigma-transcode-live'
          },
          { text: 'Sigma Dynamic Ads Insert Apis', link: '/apis/sigma-dai' }
        ]
      },
      { text: 'Teams', link: '/teams/', activeMatch: '/teams/' },
      {
        text: 'Links',
        items: [
          {
            text: 'Twitter',
            link: 'https://twitter.com/vite_js'
          },
          {
            text: 'Discord Chat',
            link: 'https://chat.vitejs.dev'
          },
          {
            text: 'Awesome Vite',
            link: 'https://github.com/vitejs/awesome-vite'
          },
          {
            text: 'DEV Community',
            link: 'https://dev.to/t/vite'
          },
          {
            text: 'Rollup Plugins Compat',
            link: 'https://vite-rollup-plugins.patak.dev/'
          },
          {
            text: 'Changelog',
            link: 'https://github.com/vitejs/vite/blob/main/packages/vite/CHANGELOG.md'
          }
        ]
      }
    ],

    sidebar: {
      '/sigma-interactive/': [
        {
          text: 'Get Started',
          items: [
            {
              text: 'Introduction',
              link: '/sigma-interactive/1.get-started/1.introduction'
            },
            {
              text: 'Get Started',
              link: '/sigma-interactive/1.get-started/2.get-started'
            }
          ]
        }
      ],
      '/sigma-livestream/': [
        {
          text: 'About',
          items: [
            {
              text: 'Introduction',
              link: '/sigma-livestream/1.about/1.introduction'
            },
            {
              text: 'Infrastructure',
              link: '/sigma-livestream/1.about/2.Infrastructure.md'
            },
            {
              text: 'Low Latency Streaming',
              link: '/sigma-livestream/1.about/3.low-latency-streaming.md'
            }
          ]
        }
      ],
      '/sigma-transcode-live/': [
        {
          text: 'About',
          items: [
            {
              text: 'Quick Start',
              link: '/sigma-transcode-live/1-quickstart.md'
            },
            {
              text: 'Menu Navigator',
              link: '/sigma-transcode-live/2-menu-navigator.md'
            },
            {
              text: 'Service Config',
              link: '/sigma-transcode-live/3-service-config.md'
            },
            {
              text: 'Manage Service',
              link: '/sigma-transcode-live/4-manage-service.md'
            },
            {
              text: 'Monitor',
              link: '/sigma-transcode-live/5-monitor.md'
            },
            {
              text: 'Management',
              link: '/sigma-transcode-live/6-management.md'
            },
            {
              text: 'Manifest Filtering',
              link: '/sigma-transcode-live/7-manifest-filtering.md'
            }
          ]
        }
      ],
      '/guide/': [
        {
          text: 'Guide',
          items: [
            {
              text: 'Why Vite',
              link: '/guide/why'
            },
            {
              text: 'Getting Started',
              link: '/guide/'
            },
            {
              text: 'Features',
              link: '/guide/features'
            },
            {
              text: 'Using Plugins',
              link: '/guide/using-plugins'
            },
            {
              text: 'Dependency Pre-Bundling',
              link: '/guide/dep-pre-bundling'
            },
            {
              text: 'Static Asset Handling',
              link: '/guide/assets'
            },
            {
              text: 'Building for Production',
              link: '/guide/build'
            },
            {
              text: 'Deploying a Static Site',
              link: '/guide/static-deploy'
            },
            {
              text: 'Env Variables and Modes',
              link: '/guide/env-and-mode'
            },
            {
              text: 'Server-Side Rendering (SSR)',
              link: '/guide/ssr'
            },
            {
              text: 'Backend Integration',
              link: '/guide/backend-integration'
            },
            {
              text: 'Comparisons',
              link: '/guide/comparisons'
            },
            {
              text: 'Migration from v2',
              link: '/guide/migration'
            },
            {
              text: 'Testing',
              link: '/guide/testing'
            }
          ]
        },
        {
          text: 'APIs',
          items: [
            {
              text: 'Plugin API',
              link: '/guide/api-plugin'
            },
            {
              text: 'HMR API',
              link: '/guide/api-hmr'
            },
            {
              text: 'JavaScript API',
              link: '/guide/api-javascript'
            },
            {
              text: 'Config Reference',
              link: '/config/'
            }
          ]
        }
      ],
      '/config/': [
        {
          text: 'Config',
          items: [
            {
              text: 'Configuring Vite',
              link: '/config/'
            },
            {
              text: 'Shared Options',
              link: '/config/shared-options'
            },
            {
              text: 'Server Options',
              link: '/config/server-options'
            },
            {
              text: 'Build Options',
              link: '/config/build-options'
            },
            {
              text: 'Preview Options',
              link: '/config/preview-options'
            },
            {
              text: 'Dep Optimization Options',
              link: '/config/dep-optimization-options'
            },
            {
              text: 'SSR Options',
              link: '/config/ssr-options'
            },
            {
              text: 'Worker Options',
              link: '/config/worker-options'
            }
          ]
        }
      ]
    }
  }
})