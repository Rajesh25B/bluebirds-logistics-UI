import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserThunk } from "./getUserThunk";
import { client } from "../../api/client";

const loginThunk = createAsyncThunk(
  "user/login",
  async (loginData, thunkAPI) => {
    try {
      const response = await client.post("/token/", loginData);
      const result = response["data"];
      const access = response["data"]["access"];
      const refresh = response["data"]["refresh"];

      if (response.status === 200) {
        document.cookie = `access_token=${access}; Secure;`;
        document.cookie = `refresh_token=${refresh}; Secure;`;
        // max-age=60*2;
        const { dispatch } = thunkAPI;
        dispatch(getUserThunk());

        return result;
      } else {
        return thunkAPI.rejectWithValue(result);
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export { loginThunk };
