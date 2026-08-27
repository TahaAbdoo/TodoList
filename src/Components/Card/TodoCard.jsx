import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Add from "../Button/Add";
import Typography from "@mui/material/Typography";
import InsertTodo from "../TextInput/InsertTodo";
import Todo from "../Todo/Todo";
import { v4 as uuidv4 } from "uuid";
import "../Todo/Todo.css";
import { useState } from "react";
import AlertMo from "../alert/Alert";
import ToggleButtons from "../SortingTodos/ToggleButton";
import Popup from "../Modal/Popup";
import { useContext } from "react";
import { TodosContext } from "../../Contexts/TodosContexts";
export default function TodoCard() {
  //مصدر واحد للحقيقة
  //y
  const { todos, setTodos } = useContext(TodosContext);
  //y
  const [input, setInput] = useState("");
  //y
  const [EditId, setEditId] = useState(null);
  //y
  const [AlertShow, setAlertShow] = useState(false);

  //n
  const [AlertMessage, setAlertMessage] = useState("");
  const [Alert, SetAlert] = useState("");
  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState(false);
  const [DeleteId, setDeleteId] = useState(null);
  const ButtonLabel = EditId !== null ? "تعديل" : "إضافة";
  //***Add Todo***
  function AddTodo() {
    if (EditId !== null) {
      setTodos((prev) =>
        prev.map((t) => {
          return t.id === EditId ? { ...t, title: input } : t;
        }),
      );
      SetAlert("تم تعديل المهمة بنجاح");
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

    SetAlert("تمت الاضافة ");
    ShowAlert();
    setInput("");
  }
  //***handle close Popup */
  function handleClose() {
    setOpen(false);
  }
  //*** Delete Todo***
  function DeleteTodo(id) {
    const newtodos = todos.filter((t) => {
      return t.id != id;
    });
    setOpen(false);
    SetAlert("تم حذف المهمة بنجاح");
    ShowAlert();
    setTodos(newtodos);
  }
  function ShowDeleteTodo(id) {
    setDeleteId(id);
    setOpen(true);
  }

  //***Edit Todo */
  function EditTodo(id) {
    const todo = todos.find((t) => t.id === id);
    setInput(todo.title);
    setEditId(id);
  }
  //*** ClearInput */
  function ClearInput() {
    setInput("");
  }
  //*** Show The Alert */
  function ShowAlert() {
    setTimeout(() => {
      SetAlert("");
    }, 2000);
  }
  //*** Check The Todo */
  function DoneTodo(id) {
    const todo = todos.find((t) => t.id === id);
    if (todo.isCompleted === false) {
      setTodos((prev) =>
        prev.map((t) => {
          return t.id === id ? { ...t, isCompleted: true } : t;
        }),
      );
      SetAlert("تم إنجاز المهمة بنجاح");
      ShowAlert();
      return true;
    } else {
      setTodos((prev) =>
        prev.map((t) => {
          return t.id === id ? { ...t, isCompleted: false } : t;
        }),
      );
      SetAlert("تم  الغاء إنجاز المهمة بنجاح");
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

  //sort Varible  Refactor
  let FilterTodos = null;
  if (filter === "all") {
    FilterTodos = todos;
  } else if (filter === "Completed") {
    FilterTodos = todos.filter((t) => t.isCompleted);
  } else if (filter === "UnCompleted") {
    FilterTodos = todos.filter((t) => !t.isCompleted);
  }
  const todoJsx = FilterTodos.map((t) => {
    return (
      <Todo
        key={t.id}
        TodoName={t.title}
        id={t.id}
        DeleteAtodo={ShowDeleteTodo}
        EditAtodo={EditTodo}
        CheckTodo={DoneTodo}
        IsCompleted={t.isCompleted}
      />
    );
  });
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

            {todoJsx}
          </CardContent>
          <CardActions
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "30px",
            }}
          >
            <div>
              <Add
                ButtonLabel={ButtonLabel}
                AddTodoFunction={AddTodo}
                Todo={{ id: uuidv4(), title: input }}
                ClearInput={ClearInput}
              />
            </div>
            <div style={{ width: "60%", marginLeft: "30px" }}>
              <InsertTodo input={input} setInput={setInput} />
            </div>
          </CardActions>
        </Card>
      </Container>
      {open && (
        <Popup
          id={DeleteId}
          DeleteAtodo={DeleteTodo}
          HandleOpen={ShowDeleteTodo}
          HandleClose={handleClose}
        />
      )}
      {Alert ? <AlertMo alertlabel={Alert} /> : <></>}
    </>
  );
}
