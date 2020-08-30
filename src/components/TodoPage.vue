<template>
  <div>
    <TodoList/>
    <TodoInput/>
  </div>
</template>

<script>
import TodoInput from './TodoInput'
import TodoList from './TodoList'
export default {
  name: 'TodoPage',
  components: {TodoInput, TodoList}
}
</script>
