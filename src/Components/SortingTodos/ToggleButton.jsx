import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function ToggleButtons({ SortTheTodos }) {
  const [alignment, setAlignment] = React.useState("all");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  function SortingTodos(id) {
    SortTheTodos(id);
  }

  return (
    <ToggleButtonGroup
      color="warning"
      value={alignment}
      exclusive
      style={{ marginBottom: "25px" }}
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton
        value="UnCompleted"
        style={{ fontWeight: "bold", fontSize: "18px" }}
        onClick={() => SortingTodos("UnCompleted")}
      >
        الغير المنجزة
      </ToggleButton>
      <ToggleButton
        value="Completed"
        style={{ fontWeight: "bold", fontSize: "18px" }}
        onClick={() => SortingTodos("Completed")}
      >
        المنجزة
      </ToggleButton>
      <ToggleButton
        value="all"
        style={{ fontWeight: "bold", fontSize: "18px" }}
        onClick={() => SortingTodos("all")}
      >
        الكل
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
