import React, { useState } from "react";
import { Form, FormSpy } from "react-final-form";
import KeyIcon from "@mui/icons-material/Key";
import FormButton from "../components/Auth/FormButton";
import FormFeedback from "../components/Auth/FormFeedback";
import withRoot from "../components/Auth/withRoot";
import { email, required } from "../components/Auth/FormValidation";
import { Avatar, Box, Link, Typography } from "@mui/material";
import LoginForm from "../components/Auth/LoginForm";
import Navbar from "../components/LandingPage/Navbar";
import { MuiOtpInput } from "mui-one-time-password-input";

function TwoFactorPage() {
  const [sent, setSent] = useState(false);
  const [otp, setOtp] = useState("");

  const handleChange = (newValue) => {
    setOtp(newValue);
  };

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
        <Box align="center" m={1}>
          <Avatar sx={{ backgroundColor: "primary.dark" }}>
            <KeyIcon />
          </Avatar>
          <Typography component="h1" variant="h5" fontWeight="600">
            Enter Two-Factor Authenticator code
          </Typography>
        </Box>
        <Typography variant="body2" align="center" letterSpacing="-0.5px">
          You've added an extra-layer of security for your account.
        </Typography>

        <Form
          onSubmit={handleSubmit}
          subscription={{ submitting: true }}
          validate={validate}
        >
          {({ handleSubmit: handleSubmit2, submitting }) => (
            <Box component="form" onSubmit={handleSubmit2} sx={{ mt: 1 }}>
              <MuiOtpInput
                value={otp}
                onChange={handleChange}
                required
                size="small"
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
                  {submitting || sent ? "Validating…" : "LOGIN"}
                </FormButton>
              </Box>
            </Box>
          )}
        </Form>
        <Typography align="center" letterSpacing="-0.5px">
          <Link underline="none" href="/">
            Need more help on Two-Factor?
          </Link>
        </Typography>
      </LoginForm>
    </>
  );
}

export default withRoot(TwoFactorPage);
