export const state = {
  me: {
    username: '',
    team: '',
    id: 'null',
    writing: false
  },
  thread: [],
  connected: {},
  previousAuthor: ''
}

export const mutations = {
  setMyName (state, name, team) {
    state.me.username = name
  },
  setMyTeam (state, team) {
    state.me.team = team
  },
  setPreviousAuthor (state, author) {
    state.previousAuthor = author
  },
  addMessage (state, message) {
    state.thread.push(message)
  },
  updateConnected (state, users) {
    state.connected = users
  }
}

export const actions = {
  setUser (context, name, team) {
    context.commit('setMyName', name)
    context.commit('setMyTeam', team)
  }
}
