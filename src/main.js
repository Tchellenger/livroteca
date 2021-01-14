import Vue from 'vue'
import App from './App.vue'
import VueFormulate from '@braid/vue-formulate'
import 'materialize-css/dist/css/materialize.min.css'
import 'material-design-icons/iconfont/material-icons.css'

Vue.use(VueFormulate)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
