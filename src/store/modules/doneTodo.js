const state = {
  doneTodos: []
}

const actions = {
  isDone ({commit, state}, data) {
    data.seen === true ? commit('addDoneTodo', data.todo) : commit('remove', data.todo)
  }
}

const mutations = {
  addDoneTodo (state, data) {
    state.doneTodos.push(data)
  },
  remove (state, data) {
    state.doneTodos = state.doneTodos.filter(todo => (todo.key === data.key))
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
