import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: [],
  toggle: false,
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    getTodos: (state, action) => {
      const todos = localStorage.getItem('todos')
      state.todos = todos ? JSON.parse(todos) : [];
    },

    addTodo: (state, action) => {
      const todoObj = action.payload;
      todoObj.id = Date.now();
      todoObj.isCompleted = false;

      console.log(todoObj);
      state.todos.push(todoObj);
      saveInLocalStorage(state.todos)
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
      saveInLocalStorage(state.todos)
    },
    isCompletedToggle: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload)
      todo.isCompleted = !todo.isCompleted
      saveInLocalStorage(state.todos)
      console.log(state.todos)
    }
  }
})

const saveInLocalStorage = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
}


export const {addTodo, getTodos, deleteTodo, isCompletedToggle } = todoSlice.actions;
export default todoSlice.reducer;

//?
//TODO
//!
//*