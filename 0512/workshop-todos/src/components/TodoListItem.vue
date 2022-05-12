<template>
  <div>
    <div class="container">
      <input type="checkbox" @change="completeTodo(todo)">
      <span :class="{'is-completed' : todo.isCompleted}">
        {{ todo.title }}
      </span>
      
      <input type="text" v-show="edit" v-model="editTodo" @keyup.enter="updateTodo">
      <button v-show="edit" @click="updateTodo">수정완료</button>
      <button @click="change" v-show="!edit">수정</button>
      <button @click="deleteTodo(todo)">삭제</button>
      
    </div>
    
  </div>
</template>

<script>
import {mapActions} from 'vuex'


export default {
  name:'TodoListItem',
  data () {
    return {
      edit: false,
      editTodo: this.todo.title
    }
  },
  props:{
    todo:Object
  },
  methods:{
    ...mapActions(['deleteTodo', 'completeTodo']),
    change () {
      this.edit = !this.edit
    },
    updateTodo () {
      this.$store.dispatch('updateTodo',{editTodo:this.editTodo, todo:this.todo})
      this.edit = !this.edit
      
    }
  }

}
</script>

<style scoped>
.is-completed {
  text-decoration: line-through;
}
.container {
  display: block;
}
</style>