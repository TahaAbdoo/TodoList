import "./App.css";
import TodoCard from "./Components/Card/TodoCard";
function App() {
  return (
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
  );
}

export default App;
