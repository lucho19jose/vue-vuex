import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      username: 'joseluisb.cloud'
    }
  },
  getters: {
    firstName: (state)=> (character) => {
     return state.username.split('').join(character);
    }
  },
  mutations: {
    updateUsername(state, username) {
      state.username = username;
    }
  }
})

export default store