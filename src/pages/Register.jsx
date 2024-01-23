import React, { useState } from "react";
import { Field, Form, FormSpy } from "react-final-form";
import { validEmail, required } from "../components/Form/FormValidation";
import FormButton from "../components/Form/FormButton";
import FormFeedback from "../components/Form/FormFeedback";
import withRoot from "../components/Form/withRoot";
import RegisterForm from "../components/Form/RegisterForm";
import RTPhoneField from "../components/Form/CustomFields/RTPhoneField";
import RTPasswordField from "../components/Form/CustomFields/RTPasswordField";
import RFTextField from "../components/Form/CustomFields/RTTextField";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import OnChange from "../components/Form/onChange";
import { useDispatch, useSelector } from "react-redux";
import { registerUserThunk } from "../store";

function Register() {
  const [sent, setSent] = useState(false);
  const validate = (values) => {
    const errors = required(
      ["username", "phone_number", "email", "password"],
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

  const dispatch = useDispatch();
  const { isRegistered, isLoading, error } = useSelector((state) => state.user);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone_number: "",
    password: "",
  });

  const handleSubmit = (e) => {
    setSent(true);
    const action = registerUserThunk(formData);
    // const action = registerUser(formData);
    dispatch(action);
    // console.log(formData);
  };

  const getErrorMsg = (error) => {
    if (!error) {
      return "";
    }

    const errorMsgs = [];

    for (const field in error) {
      errorMsgs.push(error[field]);
    }
    let errorMsg = errorMsgs.join(", ");

    return (
      <Box align="center">
        <Typography mt={1} letterSpacing="-0.5px">
          {errorMsg}
        </Typography>
      </Box>
    );
  };

  return (
    <>
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
                disabled={submitting || (sent && !error)}
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
                disabled={submitting || (sent && !error)}
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
                disabled={submitting || (sent && !error)}
                required
                label="Phone Number"
                name="phone_number"
                margin="normal"
              />
              <OnChange
                name="phone_number"
                onChange={(val, prev) =>
                  setFormData({
                    ...formData,
                    ["phone_number"]: val,
                  })
                }
              />
              <Field
                component={RTPasswordField}
                disabled={submitting || (sent && !error)}
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
              {isRegistered ? (
                <Box align="center">
                  <Typography mt={1} letterSpacing="-0.5px">
                    Account created successfully, now login into your account
                  </Typography>
                </Box>
              ) : (
                ""
              )}
              {error ? getErrorMsg(error) : ""}
              <Box align="center">
                <FormButton
                  sx={{ mt: 3, mb: 2 }}
                  disabled={submitting || (sent && !error)}
                  color="primary"
                >
                  {submitting || (sent && !error) ? "In progress…" : "Register"}
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
