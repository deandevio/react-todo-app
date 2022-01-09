import { useState } from "react";
import "./App.css";

let globalID = 0;

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  function createTodo(e) {
    e.preventDefault();
    setTodos((oldTodos) => {
      setTask("");
      return [...oldTodos, { todo: task, id: globalID++ }];
    });
  }

  function deleteItem(itemId) {
    setTodos((oldTodos) => oldTodos.filter((item) => item.id !== itemId));
  }

  return (
    <div className="app">
      <h1>React todo app for refreshing the memory</h1>
      <form onSubmit={createTodo}>
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
        <button type="submit">Create Todo</button>
      </form>

      <ul className="task">
        {todos.map((item, index) => {
          return (
            <div key={item.id}>
              <li>{item.todo}</li>
              <button onClick={() => deleteItem(item.id)}>delete</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
