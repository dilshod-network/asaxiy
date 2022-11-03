import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  liked: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.cart = action.payload;
    },
    incrementAmount: (state, action) => {
      state.cart[action.payload].number++;
    },
    decrementAmount: (state, action) => {
      state.cart[action.payload].number--;
    },
    deleteFormCart: (state, action) => {
      const idx = state.cart.findIndex((item) => item.id === action.payload);
      state.cart.splice(idx, 1);
    },
    addToLiked: (state, action) => {
      state.liked = action.payload;
    },
    removeFromLiked: (state, action) => {
      const idx = state.liked.findIndex((item) => item.id === action.payload);
      state.liked.splice(idx, 1);
    },
  },
});

const { reducer, actions } = cartSlice;

export default reducer;

export const {
  addProduct,
  incrementAmount,
  deleteFormCart,
  decrementAmount,
  addToLiked,
  removeFromLiked,
} = actions;
