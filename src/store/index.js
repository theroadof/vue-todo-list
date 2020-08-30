import Vue from 'vue'
import Vuex, {createLogger} from 'vuex'
import todoList from './modules/TodoList'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    todoList
  },
  plugins: debug ? [createLogger()] : []
})
