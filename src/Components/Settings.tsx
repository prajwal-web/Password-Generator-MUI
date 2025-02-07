import React from "react";
import {
  Box,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";

const Settings = ({ options, handlecheck }: any) => {
  return (
    <Box sx={{ mb: 3 }}>
      <FormGroup sx={{ mb: 2 }}>
        <FormControlLabel
          control={<Checkbox checked={options.upperCase} />}
          label="Include Uppercase Letters"
          onClick={() => handlecheck("upperCase")}
        />
        <FormControlLabel
          control={<Checkbox checked={options.lowerCase} />}
          label="Include Lowercase Letters"
          onClick={() => handlecheck("lowerCase")}
        />
        <FormControlLabel
          control={<Checkbox checked={options.num} />}
          label="Include Numbers"
          onClick={() => handlecheck("num")}
        />
        <FormControlLabel
          control={<Checkbox checked={options.symbols} />}
          label="Include Symbols"
          onClick={() => handlecheck("symbols")}
        />
      </FormGroup>
    </Box>
  );
};

export default Settings;
