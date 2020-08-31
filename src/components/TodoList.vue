<template>
  <div>
    <div v-for="todo of todos" :key="todos.indexOf(todo)">
      <Todo class="list" v-bind:todo="todo" v-bind:done="false"/>
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
    todos: state => state.todoList.todos
  })
}
</script>

<style>
  .list{
    display: inline-block;
  }
</style>
