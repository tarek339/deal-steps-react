import { configureStore } from "@reduxjs/toolkit";
import { loadingReducer, userReducer } from "./slices";

export const store = configureStore({
  reducer: {
    user: userReducer,
    loading: loadingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
