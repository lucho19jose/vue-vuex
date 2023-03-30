import { COMMIT_SET_STATUS ,COMMIT_UPDATE_USERNAME } from '@/common/mutation-types.js'
import { getUser } from '@/api'

const module = {
  namespaced: true,
  state() {
    return {
      username: ''
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
    async updateUsername({ commit, state, rootState }, username) {
      /* console.log('updateusername action', username);
      commit('updateUsername', username) */
      const user = await getUser(1);
      console.log(user)
      console.log('status', rootState.status)
      commit(COMMIT_UPDATE_USERNAME, user.username)
      if(state.username) {
        commit(COMMIT_SET_STATUS, 'active', { root: true })
      }
    }
  }
}

export default module;