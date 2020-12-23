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
    component: () => import('../views/home/Home')
  },
  {
    path: '/home/goods-detail/:id',
    component: () => import('../views/home/pages/goodsDetail/GoodsDetail')
  },
  {
    path: '/category',
    component: () => import('../views/category/Category')
  },
  {
    path: '/cart',
    component: () => import('../views/cart/Cart'),
    children: [
      {
        path: 'cartone',
        name: 'cartone',
        component: () => import('../views/cart/components/cartone.vue')
      },
      {
        path: 'carttwo',
        name: 'carttwo',
        component: () => import('../views/cart/components/carttwo.vue')
      },
      {
        path: 'cartthree',
        name: 'cartthree',
        component: () => import('../views/cart/components/cartthree.vue')
      }
    ]
  },
  {
    path: '/profile',
    component: () => import('../views/profile/Profile')
  }
]
// 3.创建一个router实例
const router = new VueRouter({
  routes,
  mode: 'history'
})


// 4导出router
export default router
