import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./index.css";
import "./styles/fonts.css";
import App from "./App.jsx";

// ثيم عام يجعل Tajawal الخط الافتراضي لكل مكونات MUI
// (يحل مشكلة تجاهل className بسبب أولوية ستايلات MUI المحقونة ديناميكيًا)
const theme = createTheme({
  typography: {
    fontFamily: '"Tajawal", sans-serif',
  },
  direction: "rtl",
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* injectFirst: يضع ستايلات MUI أولًا في <head>، فتصبح كلاساتك (tajawal-bold ...) لها الأولوية عند الحاجة للتخصيص اليدوي */}
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </StrictMode>,
);
