import { configureStore } from "@reduxjs/toolkit";
import ModalReducer from "./modalSlice";

export const store = configureStore({
  reducer: {
    ModalReducer
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
