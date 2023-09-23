import React, { useState } from "react";
import { Form, FormSpy } from "react-final-form";
import KeyIcon from "@mui/icons-material/Key";
import FormButton from "../components/Form/FormButton";
import FormFeedback from "../components/Form/FormFeedback";
import withRoot from "../components/Form/withRoot";
import { Avatar, Box, Link, Typography } from "@mui/material";
import LoginForm from "../components/Form/LoginForm";
import Navbar from "../components/LandingPage/Navbar";
import { MuiOtpInput } from "mui-one-time-password-input";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../store/thunks/loginThunk";
import { Navigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

function TwoFactorPage() {
  const [sent, setSent] = useState(false);
  const [otp, setOtp] = useState("");

  const dispatch = useDispatch();
  const { isLoading, isAuthenticated, user, error } = useSelector(
    (state) => state.user
  );

  const [formData, setFormdata] = useState({
    email: user.email,
    password: user.password,
    verification_code: otp,
  });

  const handleChange = (newValue) => {
    setOtp(newValue);
    setFormdata({ ...formData, ["verification_code"]: newValue });
  };

  const handleSubmit = () => {
    setSent(true);
    dispatch(loginThunk(formData));
  };

  const getErrorMsg = (error) => {
    if (!error) {
      return "";
    }

    const errorMsgs = [];
    let msg = "";

    for (const field in error) {
      msg += `${field}: ${error[field]}`;
      if (msg.includes("header")) {
        msg = "";
      }

      errorMsgs.push(error[field]);
    }

    let errorMsg = errorMsgs.join(", ");

    return (
      <Box align="center">
        <Typography mt={1} letterSpacing="-0.5px" color="red">
          {msg}
        </Typography>
      </Box>
    );
  };

  if (isAuthenticated) return <Navigate to="/customer/home/" />;

  return (
    <>
      <Navbar />
      {isLoading ? <CircularProgress /> : ""}
      <LoginForm>
        <Box align="center" m={1}>
          <Avatar sx={{ backgroundColor: "primary.dark" }}>
            <KeyIcon />
          </Avatar>
          <Typography component="h1" variant="h5" fontWeight="600">
            Two-Factor Authentication
          </Typography>
        </Box>
        <Typography variant="body2" align="center" letterSpacing="-0.5px">
          Enter code from your Authenticator app. OTP is valid for 30 seconds.
        </Typography>

        <Form onSubmit={handleSubmit} subscription={{ submitting: true }}>
          {({ handleSubmit: handleSubmit2, submitting }) => (
            <Box component="form" onSubmit={handleSubmit2} sx={{ mt: 1 }}>
              <MuiOtpInput
                value={otp}
                onChange={handleChange}
                required
                size="small"
                length={6}
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
                {error ? getErrorMsg(error) : ""}
                {isLoading ? <CircularProgress color="secondary" /> : ""}
              </Box>
              <Box align="center">
                <FormButton sx={{ mt: 3, mb: 2 }} color="primary">
                  {sent && !isAuthenticated ? "LOGIN" : "LOGIN"}
                </FormButton>
              </Box>
            </Box>
          )}
        </Form>
        <Typography variant="body2" align="center" letterSpacing="-0.5px">
          You've added an extra-layer of security for your account.
        </Typography>
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
