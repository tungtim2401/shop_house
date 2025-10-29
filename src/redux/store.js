import { configureStore } from "@reduxjs/toolkit";
import authorization from "./authorization";

export const store = configureStore({
  reducer: {
    auth: authorization,
  },
});
