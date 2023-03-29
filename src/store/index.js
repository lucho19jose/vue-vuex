import { createStore } from 'vuex'
import { COMMIT_UPDATE_USERNAME } from '@/common/mutation-types.js'
import { getUser } from '@/api'

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
    [COMMIT_UPDATE_USERNAME](state, username) {
      state.username = username;
    }
  },
  actions: {
    async updateUsername({ commit }, username) {
      /* console.log('updateusername action', username);
      commit('updateUsername', username) */
      const user = await getUser(1);
      console.log(user)
      commit(COMMIT_UPDATE_USERNAME, username)
    }
  }
})

export default store