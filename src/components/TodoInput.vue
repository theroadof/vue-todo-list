<template>
  <div>
    <el-input v-model="userInput" class="input" placeholder="user">
      <template slot="prepend">用户</template>
    </el-input>
    <el-input v-model="message" class="input" placeholder="please input message" clearable>
    </el-input>
    <el-button v-on:click="submit">submit</el-button>
  </div>

</template>

<script>
export default {
  name: 'TodoInput',
  data () {
    return {
      userInput: '',
      message: ''
    }
  },
  methods: {
    submit () {
      this.$store.dispatch('todoList/createTodo', {user: this.userInput, message: this.message})
    }
  }
}
</script>

<style>
.input{
  width: 300px;
  margin-bottom: 20px;
}
</style>
