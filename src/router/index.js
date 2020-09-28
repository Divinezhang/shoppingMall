// 1.导入vue-router

import Vue from 'vue'
import VueRouter from 'vue-router'

// 2.使用vue-router
Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('../views/home/home')
  },
  {
    path: '/category',
    component: () => import('../views/category/category')
  },
  {
    path: '/cart',
    component: () => import('../views/cart/cart')
  },
  {
    path: 'profile',
    component: () => import('../views/profile/profile')
  }
]
// 3.创建一个router实例
const router = new VueRouter({
  routes,
  mode: 'history'
})


// 4导出router
export default router
