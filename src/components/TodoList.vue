<template>
  <div>
    <div v-for="todo of todos" :key="todos.indexOf(todo)">
      <Todo/>
    </div>
  </div>
</template>

<script>
import Todo from './Todo'
import {mapState} from 'vuex'
export default {
  name: 'TodoList',
  components: {Todo},
  computed: mapState({
    todos: $store => $store.todoList.state.todos
  })
}
</script>
