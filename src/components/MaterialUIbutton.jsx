import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Stack from "@mui/material/Stack";
import ArrowRightAlt from "@mui/icons-material/ArrowRightAlt";

export default function MaterialUIbutton({ children }) {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" color="primary" endIcon={<ArrowRightAlt />}>
        {children}
      </Button>{" "}
    </Stack>
  );
}
