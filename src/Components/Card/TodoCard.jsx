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
//import "../styles/fonts.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AlertMo from "../alert/Alert";
import { jsx } from "react/jsx-runtime";
import ToggleButtons from "../SortingTodos/ToggleButton";
export default function TodoCard() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [EditId, setEditId] = useState(null);
  const [AlertShow, setAlertShow] = useState(false);
  const [AlertMessage, setAlertMessage] = useState("");
  const [filter, setFilter] = useState("all");
  const ButtonLabel = EditId !== null ? "تعديل" : "إضافة";
  //***Add Todo***
  function AddTodo(todo) {
    if (EditId !== null) {
      setTodos((prev) =>
        prev.map((t) => {
          return t.id === EditId ? { ...t, title: input } : t;
        }),
      );
      setAlertMessage("تم التعديل المهمة بنجاح");
      console.log(todos);
      ShowAlert();
      setEditId(null);
      setInput("");

      return;
    }
    setTodos((prev) => [
      ...prev,
      {
        id: uuidv4(),
        title: input,
        isCompleted: false,
      },
    ]);
    setAlertMessage("تمت اضافة المهمة بنجاح");
    ShowAlert();
    setInput("");
  }
  //*** Delete Todo***
  function DeleteTodo(id) {
    const newtodos = todos.filter((t) => {
      return t.id != id;
    });
    setAlertMessage("تم حذف المهمة بنجاح");
    ShowAlert();
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
  //*** Cleart Input */
  function ClearInput() {
    setInput("");
  }
  //*** Show The Alert */
  function ShowAlert() {
    setAlertShow(true);
    setTimeout(() => {
      setAlertShow(false);
    }, 2000);
  }
  //*** Check The Todo */
  function DoneTodo(id) {
    const todo = todos.find((t) => t.id == id);
    if (todo.isCompleted == false) {
      console.log(todo.title);
      setTodos((prev) =>
        prev.map((t) => {
          return t.id === id ? { ...t, isCompleted: true } : t;
        }),
      );
      setAlertMessage("تم إنجاز المهمة بنجاح");
      ShowAlert();
      return true;
    } else {
      setTodos((prev) =>
        prev.map((t) => {
          return t.id === id ? { ...t, isCompleted: false } : t;
        }),
      );
      setAlertMessage("تم  الغاء إنجاز المهمة بنجاح");
      ShowAlert();
      return false;
    }
  }
  //** Sortig The Todos */
  function SortingTodos(sortId) {
    if (sortId === "all") {
      setFilter("all");
    } else if (sortId === "Completed") {
      setFilter("Completed");
    } else if (sortId === "UnCompleted") {
      setFilter("UnCompleted");
    }
  }
  //sort Varible
  let FilterTodos = null;
  if (filter == "all") {
    FilterTodos = todos.map((t) => {
      if (t.title != "")
        return (
          <Todo
            key={t.id}
            TodoName={t.title}
            id={t.id}
            DeleteAtodo={DeleteTodo}
            EditAtodo={EditTodo}
            CheckTodo={DoneTodo}
            IsCompleted={t.isCompleted}
          />
        );
    });
  } else if (filter === "Completed") {
    FilterTodos = todos.map((t) => {
      if (t.isCompleted == true) {
        return (
          <Todo
            key={t.id}
            TodoName={t.title}
            id={t.id}
            DeleteAtodo={DeleteTodo}
            EditAtodo={EditTodo}
            CheckTodo={DoneTodo}
            IsCompleted={t.isCompleted}
          />
        );
      }
    });
  } else if (filter === "UnCompleted") {
    FilterTodos = todos.map((t) => {
      if (t.isCompleted == false) {
        return (
          <Todo
            key={t.id}
            TodoName={t.title}
            id={t.id}
            DeleteAtodo={DeleteTodo}
            EditAtodo={EditTodo}
            CheckTodo={DoneTodo}
            IsCompleted={t.isCompleted}
          />
        );
      }
    });
  }
  /*  return todos.map((t) => {
        if (t.title != "")
          return (
            <Todo
              key={t.id}
              TodoName={t.title}
              id={t.id}
              DeleteAtodo={DeleteTodo}
              EditAtodo={EditTodo}
              CheckTodo={DoneTodo}
              IsCompleted={t.isCompleted}
            />
          );
      });
    } else if (sortId == 2) {
      return todos.filter((t) => {
        return t.isCompleted == true;
      });
    } else if (sortId == 3) {
      return todos.filter((t) => {
        return t.isCompleted == false;
      });*/

  /*const todojsx = todos.map((t) => {
    console.log(todos);
    if (t.title != "")
      return (
        <Todo
          key={t.id}
          TodoName={t.title}
          id={t.id}
          DeleteAtodo={DeleteTodo}
          EditAtodo={EditTodo}
          CheckTodo={DoneTodo}
          IsCompleted={t.isCompleted}
        />
      );
  });*/
  return (
    <>
      <Container maxWidth="sm">
        <Card sx={{ minWidth: 275 }} style={{ height: "auto" }}>
          <CardContent>
            <Typography
              className="tajawal-bold"
              gutterBottom
              sx={{ color: "#4590bb", fontSize: "50px" }}
            >
              مــهامــي
            </Typography>
            <div>
              <ToggleButtons SortTheTodos={SortingTodos} />
            </div>

            {FilterTodos}
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
            />
            <InsertTodo input={input} setInput={setInput} />
          </CardActions>
        </Card>
      </Container>
      {AlertShow ? <AlertMo alertlabel={AlertMessage} /> : <></>}
    </>
  );
}
