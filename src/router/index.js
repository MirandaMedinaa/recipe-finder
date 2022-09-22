import Vue from 'vue'
import VueRouter from 'vue-router'
import Explore from '../views/Explore.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Explore',
    component: Explore
  },
  {
    path: '/weekly',
    name: 'Weekly',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Weekly.vue')
  },
  {
    path: '/bookmarks',
    name: 'Bookmarks',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Bookmarks.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
