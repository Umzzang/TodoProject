<template>
  <div id="app">
    <div>
      <h1>
      TODO
      </h1>
      <h2>ALL TODO: {{ allTodo }}</h2>
      <h2>Completed Todo:{{ completedTodo }}</h2>
      <h2>unCompleted Todo:{{ uncompletedTodo }}</h2>
      <todo-form></todo-form>
      <todo-list></todo-list>
    </div>
  </div>
</template>

<script>
import TodoForm from '@/components/TodoForm.vue'
import TodoList from '@/components/TodoList.vue'

import {mapGetters} from 'vuex'

export default {
  name: 'App',
  components: {
    TodoForm,
    TodoList
  },
  computed:{
    ...mapGetters(['allTodo', 'completedTodo', 'uncompletedTodo'])
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button {
  margin: 7px;
}
</style>
