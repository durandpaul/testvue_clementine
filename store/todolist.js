export const state = () => ({
  todosList: [{
    name: 'test from the store',
    completed: false,
    rating: 4,
    date: "date" 
  }]
})

export const mutations = {
  addTodo (state, name, date) {
    state.todosList.push({
      name: name,
      completed: false,
      rating: 4,
      date: date
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
  async addTodo ({ commit }) {
    const { data } = await axios.get('http://mon-api/')
    commit('SET_STARS', data)
  } 
}

export const getters = {
  todosCount: state => state.todosList.length,
  // completedTodos: state => state.todosList.complete(),
  // awaitTodos: state => state.todosList.notComplete()
}