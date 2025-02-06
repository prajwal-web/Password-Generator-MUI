import React, { useState } from "react";
import {
  Typography,
  Box,
  Container,
  Slider,
  Button,
  Tooltip,
  FormGroup,
  FormControlLabel,
  Checkbox,
  CssBaseline,
  Switch,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const GeneratePassword = () => {
  const [darkMode, setDarkMode] = useState(true);

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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "50vw",
          marginLeft: "50%",
        }}
      >
        <Container
          maxWidth="sm"
          sx={{
            backgroundColor: "#1c1c1c",
            textAlign: "center",
            mt: 8,
            p: 4,
            borderRadius: 2,
            color: "rgb(255 255 255 / 87%)",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
          }}
        >
          <Typography variant="h5" gutterBottom>
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
              P4$5WorD!
            </Typography>
            <Tooltip title="Copy to clipboard">
              <Button sx={{ minWidth: "30px" }}>
                <ContentCopyIcon sx={{ color: "#4caf50" }} />
              </Button>
            </Tooltip>
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography>Character Length</Typography>
            <Typography>0</Typography>
          </Box>
          <Slider
            size="medium"
            defaultValue={70}
            aria-label="Small"
            valueLabelDisplay="auto"
            sx={{ color: "black" }}
          />

          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label="Include Uppercase Letters"
              sx={{ color: "#fff" }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Include Lowercase Letters"
              sx={{ color: "#fff" }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Include Numbers"
              sx={{ color: "#fff" }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Include Symbols"
              sx={{ color: "#fff" }}
            />
          </FormGroup>

          <Box
            sx={{
              mt: 3,
              mb: 2,
              p: 1,
              bgcolor: "#2a2a2a",
              borderRadius: 2,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography>STRENGTH</Typography>
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
