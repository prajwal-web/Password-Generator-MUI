import React, { useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { PasswordProvider } from "./Components/PasswordProvider";
import { createTheme } from "@mui/material/styles";
import GeneratePassword from "./Components/GeneratePassword";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleThemeMode = () => {
    setDarkMode(!darkMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
    typography: {
      fontFamily: "'Rubik', sans-serif",
    },
  });

  return (
    <PasswordProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GeneratePassword toggleThemeMode={toggleThemeMode} />
      </ThemeProvider>
    </PasswordProvider>
  );
};

export default App;
