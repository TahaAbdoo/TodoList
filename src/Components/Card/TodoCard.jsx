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
  const [todos, setTodos] = useState([{ id: "", title: "" }]);
  //***Add Todo***
  function AddTodo(todo) {
    setTodos((prev) => [...prev, { id: todo.id, title: todo.title }]);
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
    const newtodo = todos.filter((t) => t.id == id);

    console.log(newtodo.title);
    setInput(newtodo.title);
    setTodos((prev) => [...prev, { id: id, title: input }]);
  }
  function ClearInput() {
    setInput("");
  }
  //function ShowAlert() {}
  const todojsx = todos.map((t) => {
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
