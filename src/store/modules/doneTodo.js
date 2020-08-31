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
    state.doneTodos.forEach((todo, index, arr) => {
      console.log('data key:' + data.id + ' -- todo key:' + todo.id)
      if (todo.id === data.id) {
        arr.splice(index, 1)
      }
    })
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
