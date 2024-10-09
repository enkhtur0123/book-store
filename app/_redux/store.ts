"use client";

import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slices/appSlice";

export const store = configureStore({
  reducer: {
    state: appReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
