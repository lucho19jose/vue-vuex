import { COMMIT_UPDATE_USERNAME } from '@/common/mutation-types.js'
import { getUser } from '@/api'

const module = {
  namespaced: true,
  state() {
    return {
      username: 'joseluisb.cloudModule'
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
      console.log(state.username)
    }
  },
  actions: {
    async updateUsername({ commit }, username) {
      /* console.log('updateusername action', username);
      commit('updateUsername', username) */
      const user = await getUser(1);
      console.log(user)
      commit(COMMIT_UPDATE_USERNAME, user.username)
    }
  }
}

export default module;