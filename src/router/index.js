import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/in',
    name: 'India',
    component: () => import('@/views/In.vue')
  },
  {
    path: '/mx',
    name: 'Mexico',
    component: () => import('@/views/Mx.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
