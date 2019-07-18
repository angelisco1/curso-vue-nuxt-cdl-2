import pkg from './package'
import config from './config';

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name + '!',
    titleTemplate: 'MI PAGINA: %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    bodyAttrs: {
      class: 'con-margenes'
    }
  },


  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#000',
    height: '20px',
    failedColor: 'yellow'
  },

  loadingIndicator: {
    color: 'blue',
    background: 'black',
    name: 'wandering-cubes'
  },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/styles.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/componentes.js',
    '~/plugins/filtros.js',
    '~/plugins/authPlugin.js',
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],

  axios: {
    // baseURL: 'https://jsonplaceholder.typicode.com/'
    baseURL: config.URL_AXIOS
  },

  env: {
    URL_AXIOS: config.URL_AXIOS
  },

  router: {
    middleware: ['log', 'auth']
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // config.resolve.extensions = ['.js']
    }
  }
}
