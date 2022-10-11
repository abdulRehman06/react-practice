import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// import { ITodo } from "../components/interfaces";

export interface ITodo {
  id: number;
  todo: string;
  completed: boolean;
}

interface TodosSliceState {
  todos: ITodo[];
}

const initialState: TodosSliceState = {
  todos: [
    {
      id: 1,
      todo: "test todo",
      completed: true
    },
    {
      id: 2,
      todo: "do coding",
      completed: false
    }
  ]
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      console.log(`action:::`, action);
      const newTodo: ITodo = {
        id: state.todos.length + 1,
        todo: action.payload,
        completed: false
      };
      state.todos.push(newTodo);
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      console.log(`action:::`, action);
      state.todos = state.todos.filter(
        (todo: ITodo) => todo.id !== action.payload
      );
    },
    completeTodo: (state, action: PayloadAction<number>) => {
      console.log(`action:::`, action);
      state.todos.map((todo: ITodo) => {
        if (todo.id === action.payload) todo.completed = true;
        return todo;
      });
    }
  }
});

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, completeTodo } = todoSlice.actions;

export default todoSlice.reducer;
