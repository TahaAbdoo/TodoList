import Button from "@mui/material/Button";
import "../Todo/Todo.css";
export default function Add({
  ButtonLabel,
  AddTodoFunction,
  Todo,
  ClearInput,
}) {
  function AddTodo() {
    if (Todo.title != "") {
      AddTodoFunction(Todo);
      ClearInput();
    } else {
      alert("قم بكتابة المهمة");
    }
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
        {ButtonLabel}
      </Button>
    </>
  );
}
