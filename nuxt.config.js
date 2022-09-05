export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'seven-weed',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.jpg' },
      { rel: 'stylesheet', href: "animate.css/animate.min.css"},
      { rel: 'stylesheet', href: 'bootstrap/dist/css/bootstrap.css' },
      { rel: 'stylesheet', href: 'bootstrap/dist/css/bootstrap-vue.css' },
      // { rel: 'stylesheet', href: 'aos/dist/aos.css' },
      { rel: 'stylesheet', href: '/css/vars/vars.css' },
      { rel: 'stylesheet', href: '/css/vars/globals.css' },
      { rel: 'stylesheet', href: '/css/vars/mixins.scss' },
      { rel: 'stylesheet', href: '/css/animate.min.css' },
      { rel: 'stylesheet', href: '/css/main.css' },
      { rel: 'stylesheet', href: 'swiper/css/swiper.css' }
    ],
    script: []
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // "aos/dist/aos.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '~plugins/i18n.js',
    // '~plugins/i18nData.js',
    '~plugins/bootstrap-vue.js',
    '~plugins/coolLightbox.js',
    '~plugins/fortawesome.js',
    '~plugins/swiperVue.js',
    '~plugins/vueCountDown.js',
    // '~plugins/aos.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  styleResources: {
    scss: [
      './static/css/vars/mixins.scss'
    ]
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      scss: {
        implementation: require('sass'),
      },
    },
  }
}
