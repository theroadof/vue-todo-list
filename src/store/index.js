import Vue from 'vue'
import Vuex from 'vuex'
import todoList from './modules/TodoList'

Vue.use(Vuex)

const store = new Vue({
  modules: {
    todoList
  }
})

export default store
