import React, { useState } from "react";
import { Navbar } from "./Navbar";
import {
  Box,
  CircularProgress,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import RFTextField from "../../Form/CustomFields/RTTextField";
import { Field, Form, FormSpy } from "react-final-form";
import OnChange from "../../Form/onChange";
import RTPhoneField from "../../../components/Form/CustomFields/RTPhoneField";
import RTPasswordField from "../../../components/Form/CustomFields/RTPasswordField";
import RTTextField from "../../../components/Form/CustomFields/RTTextField";
import FormButton from "../../Form/FormButton";
import { useDispatch, useSelector } from "react-redux";
import { updateProfileThunk } from "../../../store/thunks/updateProfileThunk";
import { Navigate } from "react-router-dom";

export function Profile() {
  const { isLoading, isAuthenticated, user, error, status } = useSelector(
    (state) => state.user
  );

  const [formData, setFormData] = useState({
    username: user.username,
    phone_number: user.phone_number,
    password: user.password,
    email: user.email,
  });

  const [updated, setIsUpdated] = useState(false);

  const dispatch = useDispatch();

  const getErrorMsg = (error) => {
    if (!error) {
      return "";
    }

    const errorMsgs = [];
    let msg = "";

    for (const field in error) {
      msg += `${error[field]}`;
      console.log(msg);
      errorMsgs.push(error[field]);
    }

    let errorMsg = errorMsgs.join(", ");

    return (
      <Box align="center">
        <Typography mt={1} letterSpacing="-0.5px" color="#ff0000">
          {msg}
        </Typography>
      </Box>
    );
  };

  const handleSubmit = (e) => {
    try {
      setFormData({
        ...formData,
        ["email"]: user.email,
      });
      dispatch(updateProfileThunk(formData));
      setIsUpdated(true);
    } catch (error) {
      setIsUpdated(false);
      throw error;
    }
  };

  // if (!isAuthenticated) return <Navigate to="/" />;

  return (
    <>
      <Navbar />
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
              <Typography
                variant="h5"
                gutterBottom
                marked="center"
                align="center"
                fontWeight={600}
                letterSpacing="-1.5px"
              >
                Update your profile
              </Typography>
              <Box
                align="center"
                sx={{
                  "& .MuiTextField-root": { m: 1 },
                }}
                noValidate
                autoComplete="off"
              >
                <Form
                  onSubmit={handleSubmit}
                  subscription={{ submitting: true }}
                >
                  {({ handleSubmit: handleSubmit2, submitting }) => (
                    <Box component="form" onSubmit={handleSubmit2} noValidate>
                      <Field
                        autoFocus
                        variant="outlined"
                        component={RFTextField}
                        autoComplete="given-name"
                        fullWidth
                        label="Username"
                        name="username"
                        defaultValue={user?.username}
                        // defaultValue={user ? `${user?.username}` : ""}
                        bgcolor="white"
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
                        component={RTPhoneField}
                        fullWidth
                        label="Phone Number"
                        name="phone_number"
                        margin="normal"
                        defaultValue={user ? `${user.phone_number}` : ""}
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
                        disabled={submitting}
                        fullWidth
                        name="password1"
                        label="Password"
                        notched="true"
                      />
                      <OnChange
                        name="password1"
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
                      {isLoading ? <CircularProgress /> : ""}

                      {error && updated ? getErrorMsg(error) : ""}
                      {updated && !isLoading && !error ? (
                        <Typography color="#0077b6">
                          Profile Updated successfully
                        </Typography>
                      ) : (
                        ""
                      )}

                      <Box align="center">
                        <FormButton sx={{ mt: 3, mb: 2 }} color="primary">
                          {submitting ? "Updating…" : "Update"}
                        </FormButton>
                      </Box>
                    </Box>
                  )}
                </Form>
              </Box>
            </Paper>
          </Box>
        </Container>
      </Box>
    </>
  );
}
