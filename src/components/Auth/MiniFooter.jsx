import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";

export default function MiniFooter({ year }) {
  return (
    <>
      <Box>
        <Typography
          fontSize="15px"
          minHeight="15vh"
          align="center"
          color="whitesmoke"
        >
          <CopyrightIcon sx={{ height: "18px" }} />
          BlueBirds Logistics Pvt. Ltd. {year}. All rights reserved.
        </Typography>
      </Box>
    </>
  );
}
