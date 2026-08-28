import Button from "@mui/material/Button";
import "../Todo/Todo.css";
export default function Add({
  ButtonLabel,
  AddTodoFunction,
  Todo,
  ClearInput,
  disabled,
}) {
  function AddTodo() {
    if (Todo.title != "") {
      AddTodoFunction();
      ClearInput();
    }
  }
  return (
    <>
      <Button
        size="meduim"
        color="success"
        style={{ fontWeight: "bold" }}
        variant="contained"
        className="tajawal-bold"
        onClick={AddTodo}
        disabled={disabled}
      >
        {ButtonLabel}
      </Button>
    </>
  );
}
