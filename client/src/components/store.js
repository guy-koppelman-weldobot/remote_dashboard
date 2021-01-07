
import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex);

export const store = new vuex.Store({
    state: {
      curent_list: []
    },
    mutations: {
      setList (state, list) {
        state.current_list = list;
      }
    },
    getters: {
        getCurrentList: state => {
          return state.curent_list;
        }
      }
  });