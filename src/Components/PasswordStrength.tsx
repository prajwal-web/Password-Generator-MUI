import React from "react";
import { Box, Typography } from "@mui/material";

const PasswordStrength = () => {
  return (
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
      <Typography sx={{ color: "white" }}>STRENGTH</Typography>
      <Typography sx={{ color: "#4caf50", fontWeight: "bold" }}>
        0000
      </Typography>
    </Box>
  );
};

export default PasswordStrength;
