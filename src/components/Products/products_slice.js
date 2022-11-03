import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/useHttp";
import { SHOP_API_URL, SHOP_API_KEY } from "../../config";

const initialState = {
  products: [],
  productsLoading: "notLoading",
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const { request } = useHttp();
    const data = await request(SHOP_API_URL, "GET", null, {
      Authorization: SHOP_API_KEY,
    });
    console.log(data);
    return data;
  }
);

const prodcutsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.productsLoading = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.productsLoading = "notLoading";
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.productsLoading = "error";
      });
  },
});

const { reducer, actions } = prodcutsSlice;
export default reducer;
