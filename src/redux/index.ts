import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counter/reducer";

export const store = configureStore({
  reducer: counterSlice.reducer,
});
