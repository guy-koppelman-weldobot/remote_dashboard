import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import router from './router'

//import VueSocketIO from 'vue-socket.io';
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

Vue.use(BootstrapVue);
//Vue.use(VueSocketIO, SocketInstance)
