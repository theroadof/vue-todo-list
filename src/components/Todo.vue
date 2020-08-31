<template>
  <div>
    <el-card class="card" shadow="hover">
      <div slot="header" align="left">
        <span>{{todo.user}}</span>
        <el-button class="button" type="text" v-on:click="done">read</el-button>
      </div>
      <div>
        <span v-bind:class="{doneMessage: seen}">{{todo.message}}</span>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Todo',
  props: ['todo'],
  data () {
    return {
      seen: false
    }
  },
  methods: {
    done: () => {
      console.log(this.seen)
      this.seen = !this.seen
      console.log(this.seen)
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
