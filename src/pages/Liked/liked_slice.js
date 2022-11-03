import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  likes: [],
};

const likeSlice = createSlice({
  name: "likes",
  initialState,
  reducers: {
    addLike: (state, action) => {
      state.likes = [...state.likes, action.payload];
    },
    removeLike: (state, action) => {
      const idx = state.likes.findIndex((item) => item.id === action.payload);
      state.likes.splice(idx, 1);
    },
  },
});

const { reducer, actions } = likeSlice;

export default reducer;

export const { addLike, removeLike } = actions;
