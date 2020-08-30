
const state = {
  todos: []
}

const actions = {
  createTodo ({commit, state}, data) {
    commit('createTodo', data)
  }
}

const mutations = {
  createTodo (state, data) {
    state.todos.push(data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
