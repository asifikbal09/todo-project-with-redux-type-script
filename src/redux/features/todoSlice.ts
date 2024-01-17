import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/react";

type TTodo = {
  title: string;
  description: string;
  priority: string;
  isComplete?: boolean;
};

type TInitialState = {
  todos: TTodo[];
};

const initialState: TInitialState = {
  todos: [],
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      if (state.todos.length === 0) {
        state.todos.push({ ...action.payload, isComplete: false });
      } else {
        state.todos.unshift({ ...action.payload, isComplete: false });
      }
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    toggleComplete: (state, action: PayloadAction<string>) => {
      const task = state.todos.find((item) => item.id === action.payload);
      task!.isComplete = !task?.isComplete;
      state.todos = state.todos.sort((item1, item2) =>
        item1.isComplete === item2.isComplete ? 0 : item1.isComplete ? 1 : -1
      );
    },
  },
});

export const { addTodo, removeTodo, toggleComplete } = todoSlice.actions;

export default todoSlice.reducer;
