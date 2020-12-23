import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/list'
//import { component } from 'vue/types/umd'
import Dashboard3000 from '@/components/Dashboard3000'
import Dashboard3001 from '@/components/Dashboard3001'
import NotFount from '@/components/NotFound'


Vue.use(Router)

export default new Router({//
  // mode: 'history',
  routes:
  [
    // {
    //         path: '/components/',
    //         redirect: '/'//{ ''
    //         // name: "dash"
    //         //}
    // },
    {
      path: '/list',
      name: 'list',
      component: home,
    },
    {
      path: '/',
      //name: 'Dashboard8080',
      component: Dashboard3000
    },
    {
      path: '/dash3001',
      //name: 'Dashboard8081',
      component: Dashboard3001
    },
    {
      path: '*',
      component: NotFount
    }
  ]
})
