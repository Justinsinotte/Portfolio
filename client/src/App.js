import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import { CssBaseline } from "@mui/material";
import Header from "./components/Header";

// Define custom theme objects for light and dark modes
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#007bff",
    },
    secondary: {
      main: "#ffc107",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#9a9b9c",
    },
    secondary: {
      main: "#ffc107",
    },
  },
});

function App() {
  // State variable to track the current theme mode
  const [themeMode, setThemeMode] = useState("light");

  // Function to toggle between light and dark modes
  const toggleThemeMode = () => {
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  // Select the current theme based on the theme mode
  const selectedTheme = themeMode === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={selectedTheme}>
      <CssBaseline />
      <Header themeMode={themeMode} toggleThemeMode={toggleThemeMode} />
    </ThemeProvider>
  );
}

export default App;
