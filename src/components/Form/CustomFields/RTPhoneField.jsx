import * as React from "react";
import PropTypes from "prop-types";
// import { TextField } from "@mui/material";
import { MuiTelInput } from "mui-tel-input";

function RFPhoneField(props) {
  const {
    autoComplete,
    input,
    InputProps,
    meta: { touched, error, submitError },
    ...other
  } = props;

  return (
    <MuiTelInput
      error={Boolean(!!touched && (error || submitError))}
      {...input}
      {...other}
      InputProps={{
        inputProps: {
          autoComplete,
        },
        ...InputProps,
      }}
      helperText={touched ? error || submitError : ""}
      variant="outlined"
      defaultCountry="IN"
    />
  );
}

RFPhoneField.propTypes = {
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
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/material-ui/api/filled-input/),
   * [`OutlinedInput`](/material-ui/api/outlined-input/) or [`Input`](/material-ui/api/input/)
   * component depending on the `variant` prop value.
   */
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

export default RFPhoneField;
