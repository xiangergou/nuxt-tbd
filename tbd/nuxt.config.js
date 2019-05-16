const pkg = require('./package')
const LRU = require('lru-cache')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~assets/css/reset.css',
    'element-ui/lib/theme-chalk/index.css',
    'swiper/dist/css/swiper.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: "~/plugins/swiper.js", ssr: false },
    { src: '~/plugins/waves', ssr: false },
    { src: '~/plugins/vue-lazyload', ssr: true },
    '~/plugins/axios',
    '~plugins/element-ui'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // 'nuxt-vuex-localstorage'
  ],

  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  
  render: {
    bundleRenderer: {
      cache: new LRU({
        max: 1000,
        maxAge: 1000 * 60 * 15
      })
    }
  }
}
