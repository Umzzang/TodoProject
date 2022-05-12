<template>
  <div>
    
    
    <todo-list-item
    v-for="todo in todos"
    :key="todo.title" :todo="todo"
    ></todo-list-item>
  </div>
</template>

<script>
import TodoListItem from '@/components/TodoListItem.vue'


export default {
  name: 'TodoList',
  data () {
    return {

    }
  },
  components:{
    TodoListItem,
  },
  computed:{
    todos () {
      return this.$store.state.todos
    }
  },
}
</script>

<style>

</style>