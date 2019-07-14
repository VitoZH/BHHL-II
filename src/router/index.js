// 导入vue对象
import Vue from 'vue'
// 导入vuerouter对象
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Home from '@/views/home'
Vue.use(VueRouter)
// 实例化
const router = new VueRouter({
  // 配置路由规则
  routes: [
    { name: 'login', path: '/login', component: Login },
    { name: 'home', path: '/', component: Home }
  ]
})
// 导出router
export default router
