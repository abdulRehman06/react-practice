import { FC, useEffect } from "react";
import { todoStore, useAppDispatch, useAppSelector } from "../store";
import {
  addTodo,
  completeTodo,
  deleteTodo,
  fetchTodos
} from "../store/reducer/todoSlice";
import { ITodo } from "./interfaces";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoComponent: FC = () => {
  const { todos, status } = useAppSelector(todoStore);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  console.log(`status:::`, status);
  return (
    <div className="app">
      <h1 className="heading">React Typescript Todo App</h1>
      <div className="container">
        <TodoForm addTodo={(todo) => dispatch(addTodo(todo))} />
        {status === "loading" ? (
          <h1>Loding Todos...</h1>
        ) : (
          <div className="todoList">
            {todos.map((todo: ITodo, key: number) => (
              <TodoList
                key={key}
                todo={todo}
                completeTodo={(value) => dispatch(completeTodo(value))}
                deleteTodo={(value) => dispatch(deleteTodo(value))}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoComponent;
