import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserThunk } from "./getUserThunk";
import { client } from "../../api/client";

const loginThunk = createAsyncThunk(
  "user/login",
  async (loginData, thunkAPI) => {
    try {
      const response = await client.post("/token/", loginData);
      const result = response["data"];
      if (response.status === 200) {
        console.log(response);
        localStorage.setItem("access", response["data"]["access"]);
        localStorage.setItem("refresh", response["data"]["refresh"]);
        const { dispatch } = thunkAPI;
        dispatch(getUserThunk());
        return result;
      } else {
        return thunkAPI.rejectWithValue(result);
      }
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export { loginThunk };
