import Vue from 'vue'
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad, {
  error: '~/assets/images/giphy.gif',
  loading: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
})