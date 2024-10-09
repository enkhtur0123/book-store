"use client";

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface HomeState {
  value: number;
}

const initialState = { value: 0 } satisfies HomeState as HomeState;

const appSlice = createSlice({
  name: "homeState",
  initialState,
  reducers: {
    setValue(state, action: PayloadAction<number>) {
      state.value = action.payload;
    },
  },
});

export const { setValue } = appSlice.actions;
export default appSlice.reducer;
