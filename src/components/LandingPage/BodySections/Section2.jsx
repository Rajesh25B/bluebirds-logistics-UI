import {
  Box,
  Button,
  Typography,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
      // Your custom breakpoint
      custom: 1024,
    },
  },
});

const backgroundImage =
  "https://images.unsplash.com/photo-1474540412665-1cdae210ae6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1483&q=80";

export default function Section2() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          m={5}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            //   border: "2px solid blue",
            height: "10em",
            borderRadius: "15px",
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: "center",
            // This is where you apply the custom breakpoint
            sx: {
              [theme.breakpoints.down("sm")]: {
                flexDirection: "column",
                justifyContent: "center",
              },
            },
          }}
        >
          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              [theme.breakpoints.down("sm")]: {
                flexDirection: "column",
                justifyContent: "center",
                paddingTop: "3px",
              },
            }}
          >
            <Typography
              variant="h5"
              letterSpacing="-1px"
              fontWeight={600}
              fontSize="1.5em"
              mr={3}
              pb={1}
              color="#257efa"
            >
              Calculate your Freight
            </Typography>
            <Link to="/">
              <Button size="large" variant="contained">
                CALCULATOR
              </Button>
            </Link>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
}
