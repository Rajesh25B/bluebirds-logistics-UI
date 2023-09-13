import React, { useState } from "react";
import { Field, Form, FormSpy } from "react-final-form";
import Navbar from "../components/LandingPage/Navbar";
import { validEmail, required } from "../components/Auth/FormValidation";
import FormButton from "../components/Auth/FormButton";
import FormFeedback from "../components/Auth/FormFeedback";
import withRoot from "../components/Auth/withRoot";
import RegisterForm from "../components/Auth/RegisterForm";
import RTPhoneField from "../components/Auth/CustomFields/RTPhoneField";
import RTPasswordField from "../components/Auth/CustomFields/RTPasswordField";
import RFTextField from "../components/Auth/CustomFields/RTTextField";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import OnChange from "../components/Auth/onChange";

function Register() {
  const [sent, setSent] = useState(false);
  const validate = (values) => {
    const errors = required(
      ["username", "phonenumber", "email", "password"],
      values
    );

    if (!errors.email) {
      const validEmailError = validEmail(values.email);
      if (validEmailError) {
        errors.email = validEmailError;
      }
    }
    return errors;
  };

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phonenumber: "",
    password: "",
  });

  const handleSubmit = (e) => {
    setSent(true);
    console.log(formData);
  };

  return (
    <>
      <Navbar />
      <RegisterForm>
        <>
          <Typography
            variant="h5"
            gutterBottom
            marked="center"
            align="center"
            fontWeight={600}
            letterSpacing="-1.5px"
          >
            REGISTER FOR A NEW ACCOUNT
          </Typography>

          <Typography
            m={2}
            variant="h6"
            align="center"
            letterSpacing="-1.2px"
            fontSize="1.1em"
          >
            <Link to="/login/" underline="always">
              Already have an account?
            </Link>
          </Typography>
        </>
        <Form
          onSubmit={handleSubmit}
          subscription={{ submitting: true }}
          validate={validate}
        >
          {({ handleSubmit: handleSubmit2, submitting }) => (
            <Box component="form" onSubmit={handleSubmit2} noValidate>
              <Field
                autoFocus
                variant="outlined"
                component={RFTextField}
                disabled={submitting || sent}
                autoComplete="given-name"
                fullWidth
                label="Username"
                name="username"
                required
              />
              <OnChange
                name="username"
                onChange={(val, prev) =>
                  setFormData({
                    ...formData,
                    ["username"]: val,
                  })
                }
              />
              <Field
                autoComplete="email"
                component={RFTextField}
                disabled={submitting || sent}
                fullWidth
                label="Email"
                margin="normal"
                name="email"
                required
              />
              <OnChange
                name="email"
                onChange={(val, prev) =>
                  setFormData({
                    ...formData,
                    ["email"]: val,
                  })
                }
              />
              <Field
                component={RTPhoneField}
                fullWidth
                disabled={submitting || sent}
                required
                label="Phone Number"
                name="phonenumber"
                margin="normal"
              />
              <OnChange
                name="phonenumber"
                onChange={(val, prev) =>
                  setFormData({
                    ...formData,
                    ["phonenumber"]: val,
                  })
                }
              />
              <Field
                component={RTPasswordField}
                disabled={submitting || sent}
                fullWidth
                required
                name="password"
                label="Password"
                notched="true"
              />
              <OnChange
                name="password"
                onChange={(val, prev) =>
                  setFormData({
                    ...formData,
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
                <FormButton
                  sx={{ mt: 3, mb: 2 }}
                  disabled={submitting || sent}
                  color="primary"
                >
                  {submitting || sent ? "In progress…" : "Register"}
                </FormButton>
              </Box>
            </Box>
          )}
        </Form>
      </RegisterForm>
    </>
  );
}

export default withRoot(Register);
