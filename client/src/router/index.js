import Vue from 'vue'
import Router from 'vue-router'
import list from '@/components/list'
//import { component } from 'vue/types/umd'
import Dashboard3000 from '@/components/Dashboard3000'
import Dashboard3001 from '@/components/Dashboard3001'
import NotFount from '@/components/NotFound'


Vue.use(Router)


// const originalPush = Router.prototype.push
// Router.prototype.push = function push (location) {
//   return originalPush.call(this, location).catch(err => err)
// }

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
      path: '/list/:rand',
      //name: 'list',
      component: list
    },
    // {
    //   path: '/',
    //   //name: 'Dashboard8080',
    //   component: Dashboard3000
    // },
    {
      path: '/',
      name: 'Dashboard3001',
      component: Dashboard3001
    },
    {
      path: '/dash3000',
      name: 'Dashboard3000',
      component: Dashboard3000
    },
    {
      path: '*',
      component: NotFount
    }
  ]
})
