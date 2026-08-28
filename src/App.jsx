import "./App.css";
import TodoCard from "./Components/Card/TodoCard";
import { TodosContext } from "./Contexts/TodosContexts";
//import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
//import { createTheme, ThemeProvider } from "@mui/material/styles";
function App() {
  const [todos, setTodos] = useState([]);
  /*const theme = createTheme({
    palette: {
      primary: {
        main: "#00c853",
      },
    },
  });*/
  return (
    <TodosContext.Provider value={{ todos: todos, setTodos: setTodos }}>
      {/*  <ThemeProvider theme={theme}>*/}
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
      {/*</TodosContext.Provider></ThemeProvider>*/}
    </TodosContext.Provider>
  );
}

export default App;
