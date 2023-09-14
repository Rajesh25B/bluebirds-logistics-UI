import { configureStore } from "@reduxjs/toolkit";
import { registerUser, userReducer } from "./slices/AuthSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export { store, registerUser };
console.log(store.getState());
export * from "./thunks/registerUser";
