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
    },
    {
        path: '/add-tour',
        name: 'Add Tour',
        component: function () {
            return import('../views/AddTour.vue')
        }
    },
    {
        path: '/add-guide',
        name: 'Add Guide',
        component: function () {
            return import('../views/AddGuide.vue')
        }
    },
    {
        path: '/add-driver',
        name: 'Add Driver',
        component: function () {
            return import('../views/AddDriver.vue')
        }
    },
    {
        path: '/add-city',
        name: 'Add City',
        component: function () {
            return import('../views/AddCity.vue')
        }
    },
    {
        path: '/add-availability',
        name: 'Add Availability',
        component: function () {
            return import('../views/AddAvailability.vue')
        }
    }
]

const router = new VueRouter({
    routes
})

export default router
