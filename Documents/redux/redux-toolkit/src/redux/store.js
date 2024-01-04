import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./color";

export default configureStore({
  reducer: {
    color: colorReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
