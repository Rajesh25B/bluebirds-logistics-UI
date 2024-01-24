import { createAsyncThunk } from "@reduxjs/toolkit";

export const logoutThunk = createAsyncThunk(
  "users/logout",
  async (_, thunkAPI) => {
    try {
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);
