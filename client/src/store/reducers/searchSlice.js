import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    search: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const searchSelector = (state) => state.search;

export const { search } = searchSlice.actions;

export default searchSlice.reducer;
