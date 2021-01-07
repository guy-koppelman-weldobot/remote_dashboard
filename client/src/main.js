import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import router from './router'
import Vuex from 'vuex'
import {store} from './components/store'

//import VueSocketIO from 'vue-socket.io';
Vue.config.productionTip = false

export const bus = new Vue();



new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

Vue.use(BootstrapVue);
Vue.use(Vuex);
//Vue.use(VueSocketIO, SocketInstance)
