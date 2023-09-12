import React, { useState } from "react";
import { Field, Form, FormSpy } from "react-final-form";
import LockIcon from "@mui/icons-material/Lock";
import { email, required } from "../components/Auth/FormValidation";
import RFTextField from "../components/Auth/CustomFields/RTTextField";
import FormButton from "../components/Auth/FormButton";
import FormFeedback from "../components/Auth/FormFeedback";
import withRoot from "../components/Auth/withRoot";
import { Avatar, Box, Typography } from "@mui/material";
import LoginForm from "../components/Auth/LoginForm";
import Navbar from "../components/LandingPage/Navbar";
import { Link } from "react-router-dom";

const CustomLink = ({ to, name }) => {
  return (
    <Link to={to} style={{ color: "inherit", textDecoration: "inherit" }}>
      {name}
    </Link>
  );
};

function Login() {
  const [sent, setSent] = useState(false);

  const validate = (values) => {
    const errors = required(["email", "password"], values);

    if (!errors.email) {
      const emailError = email(values.email);
      if (emailError) {
        errors.email = emailError;
      }
    }
    return errors;
  };

  const handleSubmit = () => {
    setSent(true);
  };

  return (
    <>
      <Navbar />
      <LoginForm>
        <Box align="center" mb={1}>
          <Avatar sx={{ backgroundColor: "primary.dark" }}>
            <LockIcon />
          </Avatar>
          <Typography component="h1" variant="h5" fontWeight="600">
            Login
          </Typography>
        </Box>
        <Typography
          variant="body2"
          align="center"
          letterSpacing="-0.5px"
          color="blue"
        >
          {"Not a member yet? "}
          <CustomLink to="/register/" name="CLICK TO REGISTER" />
        </Typography>

        <Form
          onSubmit={handleSubmit}
          subscription={{ submitting: true }}
          validate={validate}
        >
          {({ handleSubmit: handleSubmit2, submitting }) => (
            <Box
              component="form"
              onSubmit={handleSubmit2}
              noValidate
              sx={{ mt: 1 }}
            >
              <Field
                autoComplete="email"
                autoFocus
                component={RFTextField}
                disabled={submitting || sent}
                fullWidth
                label="Email"
                margin="normal"
                name="email"
                required
                size="large"
              />
              <Field
                fullWidth
                size="large"
                component={RFTextField}
                disabled={submitting || sent}
                required
                name="password"
                autoComplete="current-password"
                label="Password"
                type="password"
                margin="normal"
              />
              <FormSpy subscription={{ submitError: true }}>
                {({ submitError }) =>
                  submitError ? (
                    <FormFeedback error sx={{ mt: 2 }}>
                      {submitError}
                    </FormFeedback>
                  ) : null
                }
              </FormSpy>
              <Box align="center">
                <FormButton
                  sx={{ mt: 3, mb: 2 }}
                  disabled={submitting || sent}
                  color="primary"
                >
                  {submitting || sent ? "Logging in…" : "LOGIN"}
                </FormButton>
              </Box>
            </Box>
          )}
        </Form>
        <Typography
          variant="body2"
          align="center"
          letterSpacing="-0.5px"
          color="blue"
        >
          <CustomLink to="/forgot-password/" name="Forgot Password?" />
        </Typography>
      </LoginForm>
    </>
  );
}

export default withRoot(Login);
