import {
  createAsyncThunk,
  createReducer,
  createAction,
} from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

export const userRegister = createAsyncThunk("USER_REGISTER", (data) => {
  return axios
    .post("http://localhost:3001/user/register", data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});

export const userLogin = createAsyncThunk("USER_LOGIN", (data) => {
  return axios
    .post("http://localhost:3001/user/login", data, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
      credentials: "include",
    })
    .then((user) => {
      const token = Cookies.get("token");
      if (token) {
        Cookies.set("token", token);
      }
      return user.data;
    })
    .catch((error) => {
      console.error("Error:", error.response.data);
    });
});

export const userLogout = createAsyncThunk("USER_LOGOUT", () => {
  return axios
    .post("http://localhost:3001/user/logout", null, { withCredentials: true })
    .then(() => {
      Cookies.remove("token");
    })
    .catch((error) => console.log(error));
});

const initialState = {
  user: null,
};

export const setUser = createAction("SET_USER");
export const clearUser = createAction("CLEAR_USER");

const userReducer = createReducer(initialState, {
  [userRegister.fulfilled]: (state, action) => action.payload,
  [userLogin.fulfilled]: (state, action) => {
    state.user = action.payload;
  },
  [userLogout.fulfilled]: (state, action) => {
    state.user = null;
  },
});

export default userReducer;
