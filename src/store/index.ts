import { ThunkAction, Action, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import todoReducer from "./reducer/todoSlice";

export const store = configureStore({
  reducer: {
    todoStore: todoReducer
  }
});

//Store
export const todoStore = (store: RootState) => store.todoStore;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

// Hooks
// Use this throughout your typeScript app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
