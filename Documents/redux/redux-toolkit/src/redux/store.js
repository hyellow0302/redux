import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./color";

const store = configureStore({
  reducer: {
    color: colorReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
