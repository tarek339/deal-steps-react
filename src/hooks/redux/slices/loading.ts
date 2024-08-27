import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HandleSpinner } from "../../../types/interfaces/redux/slice";

const loadingSlice = createSlice({
  name: "loading",
  initialState: {
    loading: false,
    reset: false,
  },
  reducers: {
    handleSpinner: (state, action: PayloadAction<HandleSpinner>) => {
      state.loading = action.payload.loading;
    },
  },
});

export const loadingReducer = loadingSlice.reducer;
export const { handleSpinner } = loadingSlice.actions;
