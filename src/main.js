import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueFormulate from '@braid/vue-formulate'
import '@braid/vue-formulate/dist/snow.min.css'

Vue.config.productionTip = false
Vue.use(VueFormulate)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
