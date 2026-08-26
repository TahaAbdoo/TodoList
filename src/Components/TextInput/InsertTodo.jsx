import { useState } from "react";
import TextField from "@mui/material/TextField";
export default function InsertTodo({ input, setInput }) {
  return (
    <>
      <TextField
        id="outlined-basic"
        label="😉 أضـــف الـمـهـمـة "
        variant="outlined"
        dir="rtl"
        color="error"
        fullWidth
        className="tajawal-bold"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
    </>
  );
}
