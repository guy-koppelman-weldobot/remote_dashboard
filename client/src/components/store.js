
import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex);

export const store = new vuex.Store({
    state: {
      current_list: {}
    },
    mutations: {
      setList (state, list) {
        Object.assign(state.current_list, list);
        //state.current_list = list;
      }
    },
    getters: {
        getCurrentList: state => {
          return state.current_list;
        }
      }
  });