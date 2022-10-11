import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// import { ITodo } from "../components/interfaces";

export interface ITodo {
  id: number;
  todo: string;
  completed: boolean;
}

interface TodosSliceState {
  todos: ITodo[];
  status?: "idle" | "loading" | "failed";
}

const initialState: TodosSliceState = {
  todos: []
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "idle";
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state) => {
        state.status = "failed";
      });
  }
});

export const fetchTodos = createAsyncThunk("counter/fetchCount", async () => {
  const response = await fetchCount();
  return response.todos;
});

// A mock function to mimic making an async request for data
export function fetchCount() {
  return new Promise<{ todos: ITodo[] }>((resolve) =>
    setTimeout(
      () =>
        resolve({
          todos: [
            {
              id: 100,
              todo: "test todo",
              completed: true
            },
            {
              id: 200,
              todo: "do coding",
              completed: false
            }
          ]
        }),
      2000
    )
  );
}

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, completeTodo } = todoSlice.actions;

// export todoStates =   (store: RootState) => store.todoStore;
export default todoSlice.reducer;
