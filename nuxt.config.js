export default {
  ssr: true,
  target: 'server',
  // Font awesome

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'wibu',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/route'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: ['~/components', '~/layouts'],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/composition-api/module',
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/fontawesome',
  ],
  fontawesome: {
    component: 'fa',
    icons: {
      solid: true,
      brands: true,
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/i18n',
    {
      strategy: 'prefix_except_default',
      locales: [
        {
          code: 'en',
          name: 'English',
          file: 'en-US/index.ts',
        },
      ],
      lazy: true,
      defaultLocale: 'en',
      langDir: 'lang/',
      detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'learn_i18n',
        redirectOn: 'root', // recommended
        alwaysRedirect: true,
        cookieCrossOrigin: true,
      },
    },
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
  },
  proxy: {
    '/api/': 'https://learn.huuhait.me/',
  },
  middleware: ['auth'],
  router: {
    middleware: ['auth'],
  },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  layout(context) {
    return 'home', 'listen-music-detail'
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      less: {
        lessOptions: {
          modifyVars: {},
          javascriptEnabled: true,
        },
      },
    },
  },
}
