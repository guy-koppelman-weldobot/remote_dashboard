const store = new Vuex.Store({
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

export default  store;