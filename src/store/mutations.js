export const state = {
  username: '',
  userteam: '',
  wpjson: {},
  thread: [],
  iswriting: false,
  userswriting: {},
  userslist: {}
}

export const mutations = {
  setUser (state, name, team) {
    state.username = name
    state.userteam = team
  }
}
