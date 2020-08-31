const state = {
  seen: false
}

const actions = {
  isDone ({commit}) {
    commit('isDone')
  }
}

const mutations = {
  isDone (state) {
    state.seen = !state.seen
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
