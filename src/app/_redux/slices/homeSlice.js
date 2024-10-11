"use client";

import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "homeState",
  initialState: { value: 0 },
  reducers: {
    setValue(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setValue } = appSlice.actions;
export default appSlice.reducer;
