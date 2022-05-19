import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";

export default function MaterialUIbutton({ children }) {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" startIcon={<DeleteIcon />}>
        {children}
      </Button>{" "}
    </Stack>
  );
}
