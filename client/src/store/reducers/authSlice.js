import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {},
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = null;
    },
    signup: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const authSelector = (state) => state.auth;

export const { login, logout, signup } = authSlice.actions;

export default authSlice.reducer;
