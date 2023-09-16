import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const registerUserThunk = createAsyncThunk(
  "user/register",

  async (formData, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/customer/create/",
        formData,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 201) {
        console.log(response.data);
        return response.data;
      } else {
        console.log(response.data);
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (err) {
      console.log(err.response.data);
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export { registerUserThunk };
