import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Add from "../Button/Add";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InsertTodo from "../TextInput/InsertTodo";
import Todo from "../Todo/Todo";
import "../Todo/Todo.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Alert from "@mui/material/Alert";
export default function TodoCard() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [EditId, setEditId] = useState(null);
  const ButtonLabel = EditId !== null ? "تعديل" : "إضافة";

  //***Add Todo***
  function AddTodo(todo) {
    if (EditId !== null) {
      setTodos((prev) =>
        prev.map((t) => {
          return t.id === EditId ? { ...t, title: input } : t;
        }),
      );
      console.log(todos);
      setEditId(null);
      setInput("");

      return;
    }
    setTodos((prev) => [
      ...prev,
      {
        id: uuidv4(),
        title: input,
      },
    ]);
    setInput("");
  }
  //*** Delete Todo***
  function DeleteTodo(id) {
    const newtodos = todos.filter((t) => {
      return t.id != id;
    });
    console.log(todos);
    setTodos(newtodos);
  }
  //***Edit Todo */
  function EditTodo(id) {
    const todo = todos.find((t) => t.id == id);
    console.log(todo.title);
    setInput(todo.title);
    setEditId(id);
  }
  function ClearInput() {
    setInput("");
  }
  //function ShowAlert() {}
  const todojsx = todos.map((t) => {
    console.log(todos);
    if (t.title != "")
      return (
        <Todo
          key={t.id}
          TodoName={t.title}
          id={t.id}
          DeleteAtodo={DeleteTodo}
          EditAtodo={EditTodo}
        />
      );
  });
  return (
    <>
      <Container maxWidth="sm">
        <Card sx={{ minWidth: 275 }} style={{ height: "auto" }}>
          <CardContent>
            <Typography
              className="tajawal-extrabold"
              gutterBottom
              sx={{ color: "#4590bb", fontSize: 40 }}
            >
              مــهامــي
            </Typography>

            {todojsx}
          </CardContent>
          <CardActions
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Add
              ButtonLabel={ButtonLabel}
              AddTodoFunction={AddTodo}
              Todo={{ id: uuidv4(), title: input }}
              ClearInput={ClearInput}
              //Alert={ShowAlert}
            />
            <InsertTodo input={input} setInput={setInput} />
          </CardActions>
        </Card>
      </Container>
    </>
  );
}
