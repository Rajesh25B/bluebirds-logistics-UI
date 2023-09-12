import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function RFPasswordField(props) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const {
    autoComplete,
    input,
    InputProps,
    meta: { touched, error, submitError },
    ...other
  } = props;

  return (
    <Box mt={1}>
      <TextField
        error={Boolean(!!touched && (error || submitError))}
        {...input}
        {...other}
        type={showPassword ? "text" : "password"}
        InputProps={{
          inputProps: {
            autoComplete,
          },
          ...InputProps,
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        helperText={touched ? error || submitError : ""}
        variant="outlined"
      />
    </Box>
  );
}

RFPasswordField.propTypes = {
  autoComplete: PropTypes.string,
  input: PropTypes.shape({
    checked: PropTypes.bool,
    multiple: PropTypes.bool,
    name: PropTypes.string.isRequired,
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    type: PropTypes.string,
    value: PropTypes.string.isRequired,
  }).isRequired,

  InputProps: PropTypes.object,
  meta: PropTypes.shape({
    active: PropTypes.bool,
    data: PropTypes.object,
    dirty: PropTypes.bool,
    dirtySinceLastSubmit: PropTypes.bool,
    error: PropTypes.any,
    initial: PropTypes.string,
    invalid: PropTypes.bool,
    length: PropTypes.number,
    modified: PropTypes.bool,
    modifiedSinceLastSubmit: PropTypes.bool,
    pristine: PropTypes.bool,
    submitError: PropTypes.any,
    submitFailed: PropTypes.bool,
    submitSucceeded: PropTypes.bool,
    submitting: PropTypes.bool,
    touched: PropTypes.bool,
    valid: PropTypes.bool,
    validating: PropTypes.bool,
    visited: PropTypes.bool,
  }).isRequired,
};

export default RFPasswordField;
