import React, { useEffect, useMemo, useRef, useState } from "react";
import { Field, Form, FormSpy } from "react-final-form";
import LockIcon from "@mui/icons-material/Lock";
import { validEmail, required } from "../components/Form/FormValidation";
import RFTextField from "../components/Form/CustomFields/RTTextField";
import FormButton from "../components/Form/FormButton";
import FormFeedback from "../components/Form/FormFeedback";
import withRoot from "../components/Form/withRoot";
import { Avatar, Box, CircularProgress, Typography } from "@mui/material";
import LoginForm from "../components/Form/LoginForm";
import { Link, Navigate } from "react-router-dom";
import OnChange from "../components/Form/onChange";
import { loginThunk } from "../store/thunks/loginThunk";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { twoFactorLoginThunk } from "../store/thunks/twoFactorLoginThunk";

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
      const validEmailError = validEmail(values.email);
      if (validEmailError) {
        errors.email = validEmailError;
      }
    }
    return errors;
  };

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const { isAuthenticated, isLoading, error, is_2fa_enabled } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    setSent(true);

    const action = twoFactorLoginThunk(loginData);
    dispatch(action);
  };

  useEffect(() => {
    // console.log("useEffect is running");
    if (is_2fa_enabled === false) {
      // console.log("useEffect is running 1");
      dispatch(loginThunk(loginData));
    } else if (is_2fa_enabled === true) {
      // Redirect to the 2FA verification page
      // console.log("useEffect is running 2");
      navigate("/two-factor/", { replace: true }, { data: loginData });
    } else {
      // Handle the case where is_2fa_enabled is neither true nor false
      navigate("/login/", { replace: true });
    }
  }, [is_2fa_enabled]);

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
        <Typography mt={1} letterSpacing="-0.5px">
          {msg}
        </Typography>
      </Box>
    );
  };

  if (isAuthenticated) return <Navigate to="/home/" />;

  return (
    <>
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
                disabled={submitting || (sent && !error)}
                fullWidth
                label="Email"
                margin="normal"
                name="email"
                required
                size="large"
              />
              <OnChange
                name="email"
                onChange={(val, prev) =>
                  setLoginData({
                    ...loginData,
                    ["email"]: val,
                  })
                }
              />
              <Field
                fullWidth
                size="large"
                component={RFTextField}
                disabled={submitting || (sent && !error)}
                required
                name="password"
                autoComplete="current-password"
                label="Password"
                type="password"
                margin="normal"
              />
              <OnChange
                name="password"
                onChange={(val, prev) =>
                  setLoginData({
                    ...loginData,
                    ["password"]: val,
                  })
                }
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
                <FormButton
                  sx={{ mt: 3, mb: 2 }}
                  disabled={submitting || (sent && !error)}
                  color="primary"
                >
                  {submitting || (sent && error) ? "Logging in…" : "LOGIN"}
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
