import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../api/client";

export const logoutThunk = createAsyncThunk(
  "users/logout",
  async (_, thunkAPI) => {
    try {
      document.cookie = `access_token=${""};`;
      document.cookie = `refresh_token=${""};`;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);
