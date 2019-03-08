export const state = () => ({
  todosList: []
})

export const mutations = {
  setTodos: (state, todosList) => {
    state.todosList = todosList 
  },
  addTodo (state, name) {
    let date = new Date();
    state.todosList.push({
      name: name,
      completed: false,
      rating: 4,
      date: date.toLocaleDateString()
    })
  },
  removeTodo (state, { todo }) {
    state.todosList.splice(state.todosList.indexOf(todo), 1)
  },
  toggleTodos (state, todo) {
    todo.done = !todo.done
  }
}
 
export const actions = {
  ADD_TODO: (store, name) => {
    store.commit('addTodo', name)
  },
  DELETE_TODO: (store, name) => {
    store.commit('addTodo', name)
    this.todosList.splice(id, 1);
  },
  async FETCH_TODOS ({ commit }) {
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