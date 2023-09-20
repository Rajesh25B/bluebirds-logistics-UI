import { createSlice } from "@reduxjs/toolkit";
import { registerUserThunk } from "../thunks/registerUser";
import { loginThunk } from "../thunks/loginThunk";
import { getUserThunk } from "../thunks/getUserThunk";
import { logoutThunk } from "../thunks/logoutThunk";
import { updateProfileThunk } from "../thunks/updateProfileThunk";

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
    // registerUser(state, action) {
    //   state.user = action.payload;
    // },
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
    builder.addCase(loginThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.isLoading = false;
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(loginThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(getUserThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getUserThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(getUserThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(logoutThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(logoutThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
    });
    builder.addCase(logoutThunk.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(updateProfileThunk.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(updateProfileThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(updateProfileThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

// export the action creators and reducers that are automatically created for us by the createSlice API

export const userReducer = AuthSlice.reducer;
// export const { registerUser } = AuthSlice.actions;

// export const selectCurrentUser = (state) => state.auth.user;
