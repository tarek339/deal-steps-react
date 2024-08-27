import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  IAddUser,
  InitialUserState,
} from "../../../types/interfaces/redux/slice";

const initialState: InitialUserState = {
  user: null,
  loading: true,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IAddUser>) => {
      state.user = action.payload.user;
      state.loading = false;
    },
    removeUser: (state) => {
      state.user = null;
      state.loading = false;
    },
  },
});

export const userReducer = userSlice.reducer;
export const { addUser, removeUser } = userSlice.actions;
