import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Add from "../Button/Add";
import Typography from "@mui/material/Typography";
import InsertTodo from "../TextInput/InsertTodo";
import Todo from "../Todo/Todo";
import { parse, v4 as uuidv4 } from "uuid";
import "../Todo/Todo.css";
import { useState, useEffect } from "react";
import AlertMo from "../alert/Alert";
import ToggleButtons from "../SortingTodos/ToggleButton";
import Popup from "../Modal/Popup";
import { useContext } from "react";
import { TodosContext } from "../../Contexts/TodosContexts";
export default function TodoCard() {
  //مصدر واحد للحقيقة
  const { todos, setTodos } = useContext(TodosContext);
  const [input, setInput] = useState("");
  const [EditId, setEditId] = useState(null);
  const [Alert, setAlert] = useState("");
  const [filter, setFilter] = useState("all");
  const [DeleteId, setDeleteId] = useState(null);

  const ButtonLabel = EditId !== null ? "تعديل" : "إضافة";
  const openPopup = DeleteId !== null ? true : false;
  //***Add Todo***
  function AddTodo() {
    //localStorage.setItem("todos", JSON.stringify(todos));
    if (EditId !== null) {
      const EditTodos = todos.map((t) =>
        t.id === EditId ? { ...t, title: input } : t,
      );
      setTodos(EditTodos);
      localStorage.setItem("todos", JSON.stringify(EditTodos));
      /*setTodos((prev) =>
        prev.map((t) => (t.id === EditId ? { ...t, title: input } : t)),
      );*/

      setAlert("تم تعديل المهمة بنجاح");
      setEditId(null);
    } else {
      /*setTodos((prev) => [
        ...prev,
        {
          id: uuidv4(),
          title: input,
          isCompleted: false,
        },
      ]);*/
      const newTodo = {
        id: uuidv4(),
        title: input,
        isCompleted: false,
      };
      const updateTodos = [...todos, newTodo];
      setTodos(updateTodos);
      localStorage.setItem("todos", JSON.stringify(updateTodos));
      setAlert("تمت اضافة المهمة بنجاح");
    }
    setInput("");
  }
  //***handle close Popup */
  function handleClose() {
    setDeleteId(null);
  }
  //*** Delete Todo***
  function DeleteTodo(id) {
    const updateTodos = todos.filter((t) => {
      return t.id != id;
    });

    setDeleteId(null);
    setAlert("تم حذف المهمة بنجاح");
    setTodos(updateTodos);
    localStorage.setItem("todos", JSON.stringify(updateTodos));
  }
  function ShowDeleteTodo(id) {
    setDeleteId(id);
  }

  //***Edit Todo */
  function EditTodo(id) {
    const todo = todos.find((t) => t.id === id);
    console.log("id:", id);
    console.log("todos:", todos);
    console.log("todo:", todo);
    setInput(todo.title);
    setEditId(id);
  }
  //*** ClearInput */
  function ClearInput() {
    setInput("");
  }
  //*** Show The Alert */
  useEffect(() => {
    if (Alert === "") return;

    const timer = setTimeout(() => {
      setAlert("");
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [Alert]);
  //*** Check The Todo */
  function CheckTodo(id) {
    const todo = todos.find((t) => t.id === id);
    const updateTodos = todos.map((t) =>
      t.id === id ? { ...t, isCompleted: !t.isCompleted } : t,
    );
    setTodos(updateTodos);
    localStorage.setItem("todos", JSON.stringify(updateTodos));
    /*setTodos((prevs) =>
      prevs.map((t) =>
        t.id === id ? { ...t, isCompleted: !t.isCompleted } : t,
      ),
    );*/

    //todo  تمثل الحالة القديمة
    !todo.isCompleted
      ? setAlert("تم إنجاز المهمة بنجاح")
      : setAlert("تم  الغاء إنجاز المهمة بنجاح");
  }
  //** Sortig The Todos */
  function SortingTodos(sortId) {
    setFilter(sortId);
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
        DeleteAtodo={ShowDeleteTodo}
        EditAtodo={EditTodo}
        CheckTodo={CheckTodo}
        todo={t}
      />
    );
  });
  //side Effects
  useEffect(() => {
    if (localStorage.getItem("todos")) {
      const TodosStorage = JSON.parse(localStorage.getItem("todos"));
      setTodos(TodosStorage);
    } else {
      setTodos([]);
    }
  }, []);
  // [] FOR fIRST time
  return (
    <>
      <Container maxWidth="sm">
        <Card
          sx={{ minWidth: 275 }}
          style={{ maxHeight: "80vh", overflowY: "scroll" }}
        >
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
                disabled={input.length == 0}
              />
            </div>
            <div style={{ width: "60%", marginLeft: "30px" }}>
              <InsertTodo input={input} setInput={setInput} />
            </div>
          </CardActions>
        </Card>
      </Container>
      {openPopup && (
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
