import { reactive } from 'vue';
const store = reactive({
  username: 'joseluisb.cloud',
  updateUsername(username) {
    this.username = username;
  }
})

export default store;