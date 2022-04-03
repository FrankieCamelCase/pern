import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import './App.css';


//components
import InputTodo from "./components/input";
import ListTodos from "./components/list";


function App() {
  return (
    <Fragment>
      <div className="container">
      <InputTodo />
      <ListTodos />
      </div>
    </Fragment>
  );
}

export default App;
