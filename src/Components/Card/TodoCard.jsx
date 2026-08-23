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
export default function TodoCard() {
  const [input, setInput] = useState("");
  const [todo, setTodos] = useState([]);
  function AddTodo(todo) {
    setTodos((prev) => [...prev, todo]);
  }
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

            <Todo />
          </CardContent>
          <CardActions
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Add AddTodoFunction={AddTodo} Todo={input} />
            <InsertTodo input={input} setInput={setInput} />
          </CardActions>
        </Card>
      </Container>
    </>
  );
}
