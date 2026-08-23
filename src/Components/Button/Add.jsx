import Button from "@mui/material/Button";
import "../Todo/Todo.css";
export default function Add({ AddTodoFunction, Todo }) {
  function AddTodo() {
    AddTodoFunction(Todo);
  }
  return (
    <>
      <Button
        size="meduim"
        color="error"
        style={{ fontWeight: "bold" }}
        variant="contained"
        className="tajawal-bold"
        onClick={AddTodo}
      >
        إضــافــــة
      </Button>
    </>
  );
}
