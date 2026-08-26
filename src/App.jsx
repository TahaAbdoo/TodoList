import "./App.css";
import TodoCard from "./Components/Card/TodoCard";
import { TodosContext } from "./Contexts/TodosContexts";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
function App() {
  const [todos, setTodos] = useState([]);
  return (
    <TodosContext.Provider value={{ todos: todos, setTodos: setTodos }}>
      <div
        style={{
          margin: "auto 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TodoCard />
      </div>
    </TodosContext.Provider>
  );
}

export default App;
