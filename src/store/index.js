import Vue from 'vue'
import Vuex, {createLogger} from 'vuex'
import todoList from './modules/TodoList'
import todo from './modules/Todo'
import doneTodo from './modules/doneTodo'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    todoList,
    todo,
    doneTodo
  },
  plugins: debug ? [createLogger()] : []
})
