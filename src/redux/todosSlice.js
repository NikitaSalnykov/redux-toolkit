const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  todos: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, { payload }) {
      state.todos.push(payload);
    },
    removeTodo(state, { payload }) {
      state.todos = state.todos.filter(todo => todo.id !== payload);
    },
    editTodo(state, { payload }) {
      state.todos = state.todos.map(todo => {
        return todo.id === payload.id ? { ...todo, text: payload.text } : todo;
      });
    },
  },
});

export default todosSlice.reducer;
export const { addTodo, removeTodo, editTodo } = todosSlice.actions;
