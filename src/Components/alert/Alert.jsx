import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";

export default function AlertMo({ alertlabel }) {
  return (
    <Alert
      icon={<CheckIcon fontSize="inherit" />}
      severity="success"
      className="Alert"
      style={{
        position: "fixed",
        top: "10px",
        right: "20px",
      }}
    >
      {alertlabel}
    </Alert>
  );
}
