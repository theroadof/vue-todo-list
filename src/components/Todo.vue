<template>
  <div>
    <el-card class="card" shadow="hover">
      <div slot="header" align="left">
        <span>{{todo.user}}</span>
        <el-button class="button" type="text" v-on:click="isDone">read</el-button>
      </div>
      <div>
        <span :class="{doneMessage: this.seen}">{{todo.message}}</span>
      </div>
    </el-card>
  </div>
</template>

<script>

export default {
  name: 'Todo',
  props: ['todo', 'done'],
  data () {
    return {
      seen: this.done
    }
  },
  methods: {
    isDone () {
      this.seen = !this.seen
      this.$store.dispatch('doneTodo/isDone', {todo: this.todo, seen: this.seen})
    }
  }
}
</script>

<style>
  .card {
    width: 350px;
    margin-bottom: 10px;
  }
  .button{
    float: right;
  }
  .doneMessage{
    text-decoration: red line-through;
  }
</style>
