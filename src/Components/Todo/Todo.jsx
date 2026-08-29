import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleTwoToneIcon from "@mui/icons-material/CheckCircleTwoTone";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import CancelIcon from "@mui/icons-material/Cancel";
/*import { useContext } from "react";
import { TodosContext } from "../../Contexts/TodosContexts";*/
import "./Todo.css";
export default function Todo({ DeleteAtodo, EditAtodo, CheckTodo, todo }) {
  //const { todos, setTodos } = useContext(TodosContext);

  function DeleteTodo() {
    DeleteAtodo(todo.id);
  }
  function EditTodo() {
    EditAtodo(todo.id);
  }
  function CheckCancelTodo() {
    CheckTodo(todo.id);
  }

  return (
    <Card
      variant="outlined"
      style={{
        background: "#79b3d472",
        padding: "10px",
        marginBottom: "20px",
      }}
    >
      <div className="CardTodoEffect">
        <CardContent
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "0px",
            height: "10px",
            paddingBottom: "3px",
          }}
        >
          <div style={{ display: "flex", gap: "7px" }}>
            <DeleteIcon
              color="error"
              style={{ cursor: "pointer" }}
              className="DeleteIcon"
              onClick={DeleteTodo}
            />

            <BorderColorRoundedIcon
              color="warning"
              style={{ cursor: "pointer" }}
              className="EditIcon"
              onClick={EditTodo}
            />
            {!todo.isCompleted ? (
              <CheckCircleTwoToneIcon
                color="success"
                style={{ cursor: "pointer" }}
                className="CheckIcon"
                onClick={CheckCancelTodo}
              />
            ) : (
              <CancelIcon
                color="error"
                style={{ cursor: "pointer" }}
                className="CancelIcon"
                onClick={CheckCancelTodo}
              />
            )}
          </div>

          <Typography
            sx={{
              fontSize: 23,
              textAlign: "end",
            }}
            className="TodoTitle"
            style={{
              textDecoration: todo.isCompleted ? "line-through" : "none",
            }}
          >
            {todo.title}
          </Typography>
        </CardContent>

        <CardActions />
      </div>
    </Card>
  );
}
