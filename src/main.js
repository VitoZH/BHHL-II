import Vue from 'vue'
import App from './App.vue'
// 导入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import router from '@/router'
import axios from '@/api/axios.js'
import components from '@/components'
Vue.prototype.$http = axios
Vue.use(ElementUI)
Vue.use(components)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
