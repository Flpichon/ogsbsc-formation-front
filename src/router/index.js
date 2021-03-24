import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from './../store'
import axios from "axios"

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
    meta : {
      requiresAuth: true
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'FormConnexion',
    meta : {
      requiresAuth: false
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/FormConnexion.vue')
  },
  {
    path: '/Compte',
    name: 'Compte',
    meta : {
      requiresAuth: true
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/Compte.vue')
  },
  {
    path: '/Notes',
    name: 'Notes',
    meta : {
      requiresAuth: true
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/Notes.vue')
  },
  {
    path: '/FormQcm',
    name: 'FormQcm',
    meta : {
      requiresAuth: true
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/FormQcm.vue')
  },
  {
    path: '/Result',
    name: 'Result',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Result.vue')
  },
]

const router = new VueRouter({
  routes
});

router.beforeEach(async (to, from, next) => {
  if (to.fullPath === '/login' && !!store.getters.isLoggedIn) {
      next('/');
      return;
  }
  if (to.matched.some(record => record.meta.requiresAuth)) {
      if (store.getters.isLoggedIn) {
        next();
        return;
      }
      next('/login');
  } else {
    next();
  }
});

export default router
