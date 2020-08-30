<template>
  <div>
    <el-card class="card" shadow="hover">
      <div slot="header" align="left">
        <span>{{todo.user}}</span>
        <el-button class="button" type="text">delete</el-button>
      </div>
      <div>
        <span>{{todo.message}}</span>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Todo',
  props: ['todo']
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
</style>
