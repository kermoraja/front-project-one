import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: function () {
      return import('../views/About.vue')
    }
  },
  {
    path: '/admin',
    name: 'Admin',
    component: function () {
      return import('../views/Admin.vue')
    }
  },
  {
    path: '/admin-add-photo/:id',
    name: 'Add-photo',
    component: function () {
      return import('../views/Admin-add-photo.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
