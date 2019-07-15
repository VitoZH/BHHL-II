// 导入vue对象
import Vue from 'vue'
// 导入vuerouter对象
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Home from '@/views/home'
import NotFound from '@/views/404'
import Welcome from '@/views/welcome'
Vue.use(VueRouter)
// 实例化
const router = new VueRouter({
  // 配置路由规则
  routes: [{
    name: 'login',
    path: '/login',
    component: Login
  },
  {
    name: 'home',
    path: '/',
    component: Home,
    children: [{
      name: 'welcome',
      path: '/',
      component: Welcome
    }]
  },
  // 404
  {
    path: '*',
    component: NotFound
  }
  ]
})

// 前置守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  const user = window.sessionStorage.getItem('bhhl')
  if (user) return next()
  next('/login')
})
// 导出router
export default router
