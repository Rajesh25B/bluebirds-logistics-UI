import { createAsyncThunk } from "@reduxjs/toolkit";

export const logoutThunk = createAsyncThunk(
  "users/logout",
  async (_, thunkAPI) => {
    try {
      document.cookie = `access_token=${""}; path="/";`;
      document.cookie = `refresh_token=${""}; path="/";`;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);
