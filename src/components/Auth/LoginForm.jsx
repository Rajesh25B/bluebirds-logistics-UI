import React from "react";
import PropTypes from "prop-types";
import { Box, Paper, Container } from "@mui/material";
import MiniFooter from "./MiniFooter";

function LoginForm(props) {
  const { children } = props;

  return (
    <Box
      sx={{
        display: "flex",

        backgroundImage: `url(
          "https://images.unsplash.com/photo-1557683304-673a23048d34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1482&q=80"
        )`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ mt: 6, mb: 3, pt: 10 }}>
          <Paper
            sx={{
              py: { xs: 4, md: 8 },
              px: { xs: 3, md: 6 },
            }}
          >
            {children}
          </Paper>
        </Box>
        <MiniFooter year={"2023"} />
      </Container>
    </Box>
  );
}

LoginForm.propTypes = {
  children: PropTypes.node,
};

export default LoginForm;
