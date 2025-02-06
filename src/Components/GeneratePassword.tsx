import React, { useState } from "react";
import {
  Typography,
  Box,
  Container,
  Slider,
  Button,
  Tooltip,
  Paper,
  FormGroup,
  FormControlLabel,
  Checkbox,
  CssBaseline,
  Switch,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const GeneratePassword = () => {
  const storedTheme = localStorage.getItem("theme");
  const initialMode = storedTheme ? storedTheme === "dark" : true;
  const [darkMode, setDarkMode] = useState(initialMode);

  const [password, setPassword] = useState<string>("P$S5!WORD!");
  const [length, setLength] = useState<number>(12);
  const [uppercase, setUppercase] = useState<boolean>(true);
  const [lowercase, setLowercase] = useState<boolean>(true);
  const [numbers, setNumbers] = useState<boolean>(true);
  const [symbols, setSymbols] = useState<boolean>(true);
  const [shortUrl, setUrl] = useState(password);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const toggleThemeMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("theme", !darkMode ? "dark" : "light");
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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          width: "500px",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 4,
          marginLeft: "80%",
        }}
      >
        <Container
          sx={{
            backgroundColor: darkMode ? "#1c1c1c" : "white",
            textAlign: "center",
            p: 4,
            borderRadius: 2,
            color: !darkMode ? "#1c1c1c" : "white",
            boxShadow: "0px 4px 4px black",
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              borderBottom: !darkMode ? "2px solid black" : "2px solid white",
            }}
          >
            Password Generator
          </Typography>
          <Box sx={{ mb: 3 }}>
            <FormControlLabel
              control={<Switch checked={darkMode} onChange={toggleThemeMode} />}
              label={darkMode ? "Light Mode" : "Dark Mode"}
            />
          </Box>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            sx={{
              bgcolor: "#2a2a2a",
              p: 2,
              borderRadius: 2,
              mb: 2,
            }}
          >
            <Typography variant="h6" sx={{ color: "#fff" }}>
              {password}
            </Typography>
            <Paper
              sx={{
                height: "35px",
                bgcolor: "#2a2a2a",
              }}
              className="copy-box"
            >
              <Tooltip title="Copy to clipboard">
                <Button onClick={handleCopy} sx={{ minWidth: "30px" }}>
                  <ContentCopyIcon
                    sx={{ height: "20px", color: "rgb(27 227 0)" }}
                  />
                </Button>
              </Tooltip>
            </Paper>
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography>Character Length</Typography>
            <Typography>{length}</Typography>
          </Box>
          <Slider
            size="medium"
            defaultValue={length}
            max={50}
            aria-label="Small"
            valueLabelDisplay="auto"
            sx={{ color: "black" }}
            onChange={(e: any) => {
              setLength(e.target.value);
              console.log(e.target.value);
            }}
          />

          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label="Include Uppercase Letters"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Include Lowercase Letters"
            />
            <FormControlLabel control={<Checkbox />} label="Include Numbers" />
            <FormControlLabel control={<Checkbox />} label="Include Symbols" />
          </FormGroup>

          <Box
            sx={{
              mt: 3,
              mb: 2,
              p: 1,
              bgcolor: !darkMode ? "white" : "#2a2a2a",
              borderRadius: 2,
              borderBottom: "2px solid black",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                color: !darkMode ? "#1c1c1c" : "white",
              }}
            >
              STRENGTH
            </Typography>
            <Typography sx={{ color: "#4caf50", fontWeight: "bold" }}>
              0000
            </Typography>
          </Box>

          <Button
            variant="contained"
            sx={{
              bgcolor: "#8bc34a",
              color: "#000",
              fontWeight: "bold",
              width: "100%",
              "&:hover": { bgcolor: "#7cb342" },
            }}
          >
            GENERATE PASSWORD
          </Button>
        </Container>
      </Container>
    </ThemeProvider>
  );
};

export default GeneratePassword;
