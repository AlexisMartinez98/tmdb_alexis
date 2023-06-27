import { createReducer } from "@reduxjs/toolkit";
import { setUser, clearUser } from "./actions";
import initialState from "./initialState";

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setUser, (state, action) => {
      state.user = action.payload;
    })
    .addCase(clearUser, (state) => {
      state.user = null;
    });
});

export default userReducer;
