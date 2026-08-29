import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import "./PopupStyle.css";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function Popup({ id, DeleteAtodo, HandleOpen, HandleClose }) {
  function DeleteTodo() {
    DeleteAtodo(id);
  }
  return (
    <div>
      {HandleOpen ? (
        <Modal
          open={open}
          onClose={HandleClose}
          className="Modal"
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style, width: 400 }} className="ModalBox">
            <h2
              id="parent-modal-title"
              style={{ color: "#d81c1c" }}
              className="ModalTitle"
            >
              هل انت متأكد لحذف المهمة
            </h2>

            <Button
              variant="outlined"
              color="error"
              onClick={DeleteTodo}
              className="Button"
            >
              نعم انا متأكد
            </Button>

            <Button
              variant="outlined"
              color="warning"
              onClick={HandleClose}
              style={{ marginLeft: "10px" }}
              className="Button"
            >
              لا لااريد
            </Button>
          </Box>
        </Modal>
      ) : (
        <></>
      )}
    </div>
  );
}
