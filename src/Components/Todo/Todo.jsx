import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleTwoToneIcon from "@mui/icons-material/CheckCircleTwoTone";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import CancelIcon from "@mui/icons-material/Cancel";

import "./Todo.css";
export default function Todo({
  TodoName,
  id,
  DeleteAtodo,
  EditAtodo,
  CheckTodo,
  IsCompleted,
}) {
  function DeleteTodo() {
    DeleteAtodo(id);
  }
  function EditTodo() {
    EditAtodo(id);
  }
  function DoneTodo() {
    CheckTodo(id);
  }
  const card = (
    <div>
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
          {!IsCompleted ? (
            <CheckCircleTwoToneIcon
              color="success"
              style={{ cursor: "pointer" }}
              className="CheckIcon"
              onClick={DoneTodo}
            />
          ) : (
            <CancelIcon
              color="error"
              style={{ cursor: "pointer" }}
              className="CancelIcon"
              onClick={DoneTodo}
            />
          )}
        </div>

        <Typography
          sx={{
            fontSize: 23,
            textAlign: "end",
          }}
          className="tajawal-bold"
        >
          {TodoName}
        </Typography>
      </CardContent>

      <CardActions />
    </div>
  );

  return (
    <Card
      variant="outlined"
      style={{
        background: "#79b3d472",
        padding: "10px",
        marginBottom: "20px",
      }}
    >
      {card}
    </Card>
  );
}
