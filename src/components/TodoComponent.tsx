import { FC } from "react";
import { selectTodos, useAppDispatch, useAppSelector } from "../store";
import { addTodo, completeTodo, deleteTodo } from "../store/reducer/todoSlice";
import { ITodo } from "./interfaces";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoComponent: FC = () => {
  const todos = useAppSelector(selectTodos);
  const dispatch = useAppDispatch();

  return (
    <div className="app">
      <h1 className="heading">React Typescript Todo App</h1>
      <div className="container">
        <TodoForm addTodo={(todo) => dispatch(addTodo(todo))} />
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
      </div>
    </div>
  );
};

export default TodoComponent;
