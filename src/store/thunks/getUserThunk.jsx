import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../api/client";

const getUserThunk = createAsyncThunk("users/me", async (_, thunkAPI) => {
  try {
    const response = await client.get("/customer/me/");

    if (response.status === 200) {
      return response.data;
    } else {
      clg(err);
      return thunkAPI.rejectWithValue(response.data);
    }
  } catch (err) {
    clg(err);
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

export { getUserThunk };
