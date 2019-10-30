import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase/app'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'

Vue.use(VueRouter)

const routes = [
      {
      path: '*',
      redirect: '/dashboard'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
        {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
            meta: {
                //requiresAuth: true
            }
    },
        
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
