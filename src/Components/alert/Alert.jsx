import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";

export default function AlertMo({ alertlabel }) {
  return (
    <Alert
      icon={<CheckIcon fontSize="inherit" />}
      severity="success"
      style={{
        position: "fixed",
        bottom: "20px",
        left: "20px",
      }}
    >
      {alertlabel}
    </Alert>
  );
}
