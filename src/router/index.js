import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TodoPage from '../components/TodoPage'
import doneTodo from '../components/doneList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/todo',
      name: 'TodoPage',
      component: TodoPage
    },
    {
      path: '/done-todo',
      name: 'doneTodo',
      component: doneTodo
    }
  ]
})
