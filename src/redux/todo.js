import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todoList",
  initialState: {
    value: ["read", "watch k-drama"],
  },
  reducers: {
    addTodo: (state, action) => {
      state.value.unshift(action.payload);
    },

    removeTodo: (state, action) => {
        state.value.splice(action.payload, 1)
    }
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
