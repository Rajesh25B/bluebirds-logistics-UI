import React from "react";
import PropTypes from "prop-types";
import { Box, Paper, Container } from "@mui/material";
import MiniFooter from "./MiniFooter";

function RegisterForm(props) {
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
        <Box sx={{ mt: 4, mb: 2, pt: 8 }}>
          <Paper
            sx={{
              py: { xs: 4, md: 4 },
              px: { xs: 2, md: 12 },
            }}
          >
            {children}
          </Paper>
        </Box>
        <MiniFooter year={"2024"} />
      </Container>
    </Box>
  );
}

RegisterForm.propTypes = {
  children: PropTypes.node,
};

export default RegisterForm;
