import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
//import { component } from 'vue/types/umd'
import Dashboard8080 from '@/components/Dashboard8080'
import Dashboard8081 from '@/components/Dashboard8081'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes:
  [
    // {
    //         path: '/components/',
    //         redirect: '/'//{ ''
    //         // name: "dash"
    //         //}
    // },
    {
      path: '/components',
      name: 'home',
      component: home
    },
    {
      path: '/dash8080',
      //name: 'Dashboard8080',
      component: Dashboard8080
    },
    {
      path: '/dash8081',
      //name: 'Dashboard8081',
      component: Dashboard8081
    }
  ]
})
