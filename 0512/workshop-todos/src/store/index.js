import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos:[
      {title:'할일 1', isCompleted:false}
    ]
  },
  getters: {
    allTodo (state) {
      return state.todos.length
    },
    completedTodo (state) {
      return state.todos.filter(todo => {
        return todo.isCompleted === true
      }).length
    },
    uncompletedTodo (state) {
      return state.todos.filter(todo => {
        return todo.isCompleted === false
      }).length
    }
  },
  mutations: {
    CREATE_TODO (state, newTodo){
      newTodo = {title: newTodo, isCompleted:false}
      state.todos.push(newTodo)
    },
    DELETE_TODO (state, Todo) {
      const index = state.todos.indexOf(Todo)
      state.todos.splice(index, 1)
    },
    UPDATE_TODO ( state, data) {
      state.todos = state.todos.map(todo => {
        if (todo === data.todo) {
          todo.title = data.editTodo      
        }
        return todo
      })  
    },
    COMPLETE_TODO (state, Todo) {
      state.todos = state.todos.map(todo => {
        if (todo === Todo) {
          todo.isCompleted = !todo.isCompleted
        }
        return todo
      })
    }
    
  },
  actions: {
    createTodo ({ commit }, newTodo) {
      commit('CREATE_TODO', newTodo)
    },
    deleteTodo ({ commit }, Todo) {
      commit('DELETE_TODO', Todo)
    },
    updateTodo ({ commit }, data) {
      commit('UPDATE_TODO', data)    
    },
    completeTodo ({ commit }, todo) {
      commit('COMPLETE_TODO', todo)
    }
  },
  modules: {
  }
})
