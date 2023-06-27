import axios from "axios";
import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";

export const addFavorite = createAsyncThunk("ADD_FAVORITE", (data) => {
  return axios
    .post(`http://www.localhost:3001/user/${data.username}/add`, {
      category: data.category,
      dbId: data.id,
    })
    .then((movie) => movie.data)
    .catch((error) => console.log(error.response));
});

export const removeFavorite = createAsyncThunk("removeFavorite", (data) => {
  console.log(data);
  const { username, category, id } = data;
  return axios
    .delete(`http://www.localhost:3001/user/${username}/delete`, {
      data: {
        category: category,
        dbId: id,
      },
    })
    .then((movie) => movie.data)
    .catch((error) => console.log(error.response));
});

const stateFavorite = createReducer([], {
  [addFavorite.fulfilled]: (state, action) => [...state, action.payload],
  [removeFavorite.fulfilled]: (state, action) => action.payload,
});

export default stateFavorite;
