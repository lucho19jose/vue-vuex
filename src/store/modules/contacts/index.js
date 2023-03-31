const module = {
  namespaced: true,
  state() {
    return {
      contacts: [
        { id: 2, name: 'Jason', avatar: '/avatars/avatar-02.jpg' },
        { id: 3, name: 'Janet', avatar: '/avatars/avatar-03.jpg' }
      ]
    }
  },
  getters: {
    getContacts: (state) => {
      return state.contacts;
    },
    getContactsById: (state, getters, rootState) => (ContactId)=> {
      const profileId = rootState.profile.id;
       
      if(ContactId === profileId) return rootState.profile.details;
      return state.contacts.find((contact) => {
        return contact.id === ContactId
      });
    }
  }
}

export default module