import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../api/client";

const updateProfileThunk = createAsyncThunk(
  "user/update",

  async (formData, thunkAPI) => {
    try {
      const response = await client.put("/customer/me/", formData);
      return response.data;
    } catch (err) {
      console.log(err.response);
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export { updateProfileThunk };
