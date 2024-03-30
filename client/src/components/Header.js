import React from "react";
import { Typography, Button, Box, Link } from "@mui/material";
import DarkModeButton from "./DarkModeButton";
function Header({ themeMode, toggleThemeMode }) {
  return (
    <>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box p={1}>
          <Typography>J.Sinotte | Full-Stack Dev.</Typography>
        </Box>
        <Box
          style={{
            width: "20%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          p={1}
        >
          <DarkModeButton
            themeMode={themeMode}
            toggleThemeMode={toggleThemeMode}
          />
          <Link style={{ textDecoration: "none" }} href={"#"}>
            Home
          </Link>
          <Link style={{ textDecoration: "none" }} href={"#"}>
            About
          </Link>
          <Link style={{ textDecoration: "none" }} href={"#"}>
            Projects
          </Link>
          <Link style={{ textDecoration: "none" }} href={"#"}>
            Experience
          </Link>
        </Box>
      </Box>
    </>
  );
}

export default Header;
