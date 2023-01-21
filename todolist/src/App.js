import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const tasks = [...todo, input];
    setTodo(tasks);
    setInput("");
  };
  const deleteHandler = (indexValue) => {
    const newTasks = todo.filter((todo, index) => index != indexValue);
    setTodo(newTasks);
  };

  return (
    <div>
      <center>
        <h3>Todo List</h3>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          &nbsp;
          <button type="submit" value="Add">
            add
          </button>
        </form>
        {todo.map((tasks, index) => {
          return (
            <div key={index}>
              {tasks}&nbsp;
              <button
                onClick={() => {
                  deleteHandler(index);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </center>
    </div>
  );
};

export default App;
