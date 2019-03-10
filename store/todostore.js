export const state = () => ({
  todosList: []
})

export const mutations = {
  setTodos: (state, todosList) => {
    state.todosList = todosList 
  },
  addTodo (state, data) {
    state.todosList.push(data); 
  },
  removeTodo (state, { todo }) {
    state.todosList.splice(state.todosList.indexOf(todo), 1)
  },
  toggleTodos (state, todo) {
    todo.done = !todo.done
  }
}
 
export const actions = {
  async ADD_TODO (store, name) {
    let date = new Date();
    const { data } = await this.$axios.$post('https://my-json-server.typicode.com/durandpaul/testvue_clementine/db', {
      name: name,
      completed: false,
      rating: 4,
      date: date.toLocaleDateString()
    })
    store.commit('addTodo', data)
  },
  DELETE_TODO: (store, name) => {
    store.commit('addTodo', name)
    this.todosList.splice(id, 1);
  },
  async GET_TODOS ({ commit }) {
    const { data } = await state.todosList 
    commit('setTodos', data)
  },
}

export const getters = {

  todos: state => state.todosList,
  todosCount: state => state.todosList.length,
  // completedTodos: state => state.todosList.complete(),
  // awaitTodos: state => state.todosList.notComplete()
}