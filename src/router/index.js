import Vue from 'vue'
import VueRouter from 'vue-router'
import * as path from "path";
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: function (){
            return import('../views/Home.vue')
        }
    },
    {
        path: '/about',
        name: 'About',
        component: function () {
            return import('../views/About.vue')
        }
    },
    {
        path: '/contact',
        name: 'Contact',
        component: function () {
            return import('../views/Contact.vue')
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
        path: '/edit-guide/:id',
        name: 'Edit Guide',
        component: function () {
            return import('../views/EditGuide.vue')
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
        path: '/edit-driver/:id',
        name: 'Edit Driver',
        component: function () {
            return import('../views/EditDriver.vue')
        }
    },
    {
        path: '/driver-list',
        name: 'Driver List',
        component: function () {
            return import('../views/DriverList.vue')
        }
    },
    {
        path: '/booking',
        name: 'Booking',
        component: function () {
            return import('../views/Booking.vue')
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
        path: '/tour-list',
        name: 'Tour List',
        component: function () {
            return import('../views/TourList_beta.vue')
        }
    },
    {
        path: '/edit-tour/:id',
        name: 'Edit Tour',
        component: function () {
            return import('../views/EditTour.vue')
        }
    },
    {
        path: '/tour/:id',
        name: 'Tour',
        component: function () {
            return import('../views/Tour.vue')
        }
    },
    {
        path: '/add-availability',
        name: 'Add Availability',
        component: function () {
            return import('../views/AddAvailability.vue')
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: function () {
            return import('../views/Login.vue')
        }
    },
    {
        path: '/add-gallery',
        name: 'Add Gallery',
        component: function () {
            return import('../views/AddGallery.vue')
        }
    },
    {
        path: '/guide-list',
        name: 'Guide List',
        component: function () {
            return import('../views/GuideList.vue')
        }
    },
    {
    path: '/avbTemp',
    name: 'avbTemplate',
        component: function () {
        return import('../views/AvbTemplate.vue')
        }
    },
    {
        path: '/logout',
        name: 'Logout',
        component: function () {
            return import('../views/Logout.vue')
        }
    }
]

const router = new VueRouter({
    routes
})

export default router
