import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const twoFactorLoginThunk = createAsyncThunk(
  "two-factor/login",
  async (loginData, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/customer/verify-email-2fa/",
        { email: loginData["email"] }
      );
      // console.log(loginData);
      if (response.status === 200) {
        // console.log({ ...response.data, ...loginData });
        response.data = { ...response.data, ...loginData };
        return response.data;
      } else {
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export { twoFactorLoginThunk };
