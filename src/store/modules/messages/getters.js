const getters = {
  getMessages: (state) => (channelId) =>{
    return  state.messages.filter((message) => message.channelId === parseInt(channelId));
  },
  getUnreadMessages: (state, getters, rootState, rootGetters) => (channelId) => {
    return getters.getMessages(channelId).filter((message)=> message.read === false).length;
  }
}

export default getters;