import getters from './getters'
const module = {
  namespaced: true,
  state() {
    return {
      messages: [
        {
          id: 1,
          author: 1,
          message: 'Hola 👀',
          timestamp: new Date().toLocaleTimeString(),
          read: false,
          channelId: 1
        },
        {
          id: 2,
          author: 2,
          message: 'Canal 2',
          timestamp: new Date().toLocaleTimeString(),
          read: true,
          channelId: 2
        },
        {
          id: 3,
          author: 2,
          message: 'Canal 2 - mew message jeje',
          timestamp: new Date().toLocaleTimeString(),
          read: false,
          channelId: 2
        },
        {
          id: 4,
          author: 1,
          message: 'new message for meeee ',
          timestamp: new Date().toLocaleTimeString(),
          read: false,
          channelId: 2
        },
      ]
    }
  },
  getters
}

export default module;