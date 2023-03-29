import { createStore } from 'vuex'
import profile from '@/store/modules/profile';
import chat from '@/store/modules/chat';

const store = createStore({
  state() {
    return {};
  },
  getters: {
    /* firstName: (state, getters, rootState) => (c) => {
      return rootState.profile.username.split('').join(c);
    } */
  },
  mutations:{

  },
  actions: {

  },
  modules: {
    profile,
    chat
  }
})

export default store