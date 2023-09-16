import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/AuthSlice";
import { getUserThunk } from "./thunks/getUserThunk";
import { loginThunk } from "./thunks/loginThunk";
import { registerUserThunk } from "./thunks/registerUser";
import { logoutThunk } from "./thunks/logoutThunk";

const store = configureStore({
  devTools: process.env.NODE_ENV === "development",
  reducer: {
    user: userReducer,
  },
});

export { store, getUserThunk, loginThunk, registerUserThunk, logoutThunk };
// console.log(store.getState());
