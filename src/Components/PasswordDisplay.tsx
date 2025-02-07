import React from "react";
import { Box, Typography, Paper, Button, Tooltip } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const PasswordDisplay = ({ password }: { password: string }) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(password);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <Box
      sx={{
        mb: 3,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        bgcolor: "#2a2a2a",
        p: 2,
        borderRadius: 2,
      }}
    >
      <Typography variant="h6" sx={{ color: "#fff" }}>
        {password}
      </Typography>
      <Paper sx={{ height: "35px", bgcolor: "#2a2a2a" }}>
        <Tooltip title="Copied to clipboard">
          <Button onClick={handleCopy} sx={{ minWidth: "30px" }}>
            <ContentCopyIcon sx={{ height: "20px", color: "rgb(27 227 0)" }} />
          </Button>
        </Tooltip>
      </Paper>
    </Box>
  );
};

export default PasswordDisplay;
