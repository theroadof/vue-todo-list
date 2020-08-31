<template>
  <div>
    <div v-for="todo of doneTodos" :key="doneTodos.indexOf(todo)+100">
      <Todo class="list" v-bind:todo="todo" v-bind:done="true"/>
    </div>
  </div>
</template>

<script>
import Todo from './Todo'
import {mapState} from 'vuex'
export default {
  name: 'doneTodos',
  components: {Todo},
  computed: mapState({
    doneTodos: state => state.doneTodo.doneTodos
  })
}
</script>

<style>
  .list{
    display: inline-block;
  }
</style>
