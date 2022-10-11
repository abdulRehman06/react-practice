import React from "react";
import { store } from "./store";
import { Provider } from "react-redux";
import TodoComponent from "./components/TodoComponent";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <TodoComponent />
    </Provider>
  );
};
export default App;
