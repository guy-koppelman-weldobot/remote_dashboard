import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
//import { component } from 'vue/types/umd'
import Dashboard from '@/components/Dashboard'


Vue.use(Router)

export default new Router({
  routes:
  [
    {
            path: '/components/',
            redirect: '/'//{ ''
            // name: "dash"
            //}
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/',
      name: 'dash',
      component: Dashboard
    }
  ]
})
