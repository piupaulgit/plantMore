import { configureStore } from "@reduxjs/toolkit";
import ModalReducer from "./modalSlice";
import UserReducer from './userSlice';

export const store = configureStore({
  reducer: {
    ModalReducer,
    UserReducer
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
