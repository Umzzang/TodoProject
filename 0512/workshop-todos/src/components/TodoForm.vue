<template>
  <div>
    <input placeholder="할 것 입력" type="text" v-model="newTodo" @keyup.enter="createTodo">
  </div>
</template>

<script>
export default {
  name:'TodoForm',
  data () {
    return {
      newTodo:''
    }
  },
  methods:{
    createTodo () {
      this.$store.dispatch('createTodo', this.newTodo)
      this.newTodo=''
    }
  },

}
</script>

<style scoped>
input[type=text] {
  border: 2px solid skyblue;
  border-radius: 5px;
  height: 35px;
  width: 80%;
  margin: 15px;
}

</style>

