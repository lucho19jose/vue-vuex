import { createStore } from 'vuex'
import profile from '@/store/modules/profile';
import channels from '@/store/modules/channels';
import messages from '@/store/modules/messages';
import contacts from '@/store/modules/contacts';
import { COMMIT_SET_STATUS } from '@/common/mutation-types';

const store = createStore({
  state() {
    return {
      status: null
    };
  },
  getters: {
    /* firstName: (state, getters, rootState) => (c) => {
      return rootState.profile.username.split('').join(c);
    } */
  },
  mutations:{
    [COMMIT_SET_STATUS](state, payload) {
      console.log("payload", payload);
      state.status = payload;
    }
  },
  actions: {

  },
  modules: {
    profile,
    channels,
    messages,
    contacts
  }
})

export default store