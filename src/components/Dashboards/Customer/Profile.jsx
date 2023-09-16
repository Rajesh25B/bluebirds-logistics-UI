import React from "react";
import { Navbar } from "./Navbar";
import { Box } from "@mui/material";

export function Profile() {
  return (
    <div>
      <Navbar />
      <Box m={15} align="center">
        Profile Section
      </Box>
    </div>
  );
}
