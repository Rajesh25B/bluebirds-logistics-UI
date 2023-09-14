import { createSlice } from "@reduxjs/toolkit";
import { registerUserThunk } from "../thunks/registerUser";

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    isRegistered: false,
    user: {},
    isLoading: false,
    error: null,
    status: "idle",
  },
  reducers: {
    registerUser(state, action) {
      state.user = action.payload;
    },
  },
  // builder.addCase(actionCreator, reducer)
  extraReducers(builder) {
    builder.addCase(registerUserThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(registerUserThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isRegistered = true;
      state.user = action.payload;
    });
    builder.addCase(registerUserThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

// export the action creators and reducers that are automatically created for us by the createSlice API

export const userReducer = AuthSlice.reducer;
export const { registerUser } = AuthSlice.actions;
console.log(registerUser());
