import React from "react";
import { Button } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";

function DarkModeButton({ themeMode, toggleThemeMode }) {
  return (
    <DarkModeIcon onClick={toggleThemeMode}>
      {themeMode === "light" ? "Switch" : "Switch"}
    </DarkModeIcon>
  );
}

export default DarkModeButton;
