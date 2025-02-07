import React, { useState } from "react";
import { Box, Container, Typography, Button, Slider } from "@mui/material";
import PasswordDisplay from "./PasswordDisplay";
import { usePasswordContext } from "./PasswordProvider";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Settings from "./Settings";

const generateRandomPassword = (length: number, options: any) => {
  let chars = "";
  let password = "";
  if (options.upperCase) {
    chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (options.lowerCase) {
    chars += "abcdefghijklmnopqrstuvwxyz";
  }
  if (options.symbols) {
    chars += "!@#$%^&*()_+[]{}|;:,.<>?";
  }
  if (options.num) {
    chars += "0123456789";
  }
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
};

const GeneratePassword = ({
  toggleThemeMode,
}: {
  toggleThemeMode: () => void;
}) => {
  const [password, setPassword] = useState<string>("");
  const [length, setLength] = useState<number>(6);
  const [options, setOptions] = useState<any>({
    upperCase: true,
    lowerCase: true,
    num: true,
    symbols: true,
  });
  console.log(options);
  const { darkMode } = usePasswordContext();

  const handleGeneratePassword = () => {
    const newPassword = generateRandomPassword(length, options);
    setPassword(newPassword);
  };
  const handlecheck = (key: string) => {
    setOptions((prev: any) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };
  return (
    <Container
      maxWidth="sm"
      sx={{ display: "flex", justifyContent: "center", paddingTop: 4 }}
    >
      <Container
        sx={{
          backgroundColor: darkMode ? "#121212" : "white",
          p: 4,
          borderRadius: 2,
          textAlign: "center",
          boxShadow: "0px 4px 4px black",
          color: darkMode ? "white" : "black",
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
        <FormGroup sx={{ display: "flex", alignItems: "center" }}>
          <FormControlLabel
            control={<Switch />}
            onClick={toggleThemeMode}
            label={!darkMode ? " Dark Mode" : " Light Mode"}
          />
        </FormGroup>

        <PasswordDisplay
          password={
            password.length == 0 ? "!!! Atlest click one Box" : password
          }
        />

        <Box sx={{ mb: 3, display: "flex", justifyContent: "space-between" }}>
          <Typography variant="body1">Character Length: </Typography>
          <Typography variant="body1">{length} </Typography>
        </Box>
        <Slider
          size="medium"
          value={length}
          max={50}
          valueLabelDisplay="auto"
          onChange={(e: any) => setLength(e.target.value)}
        />
        <Settings options={options} handlecheck={handlecheck} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 2,
            borderBottom: "1px solid white",
            color: "green",
          }}
        >
          <Typography sx={{ color: darkMode ? "white" : "white" }}>
            Strength
          </Typography>
          <Typography>0000</Typography>
        </Box>

        <Button
          variant="contained"
          sx={{
            bgcolor: "#8bc34a",
            color: "#000",
            fontWeight: "bold",
            width: "100%",
          }}
          onClick={handleGeneratePassword}
        >
          GENERATE PASSWORD
        </Button>
      </Container>
    </Container>
  );
};

export default GeneratePassword;
