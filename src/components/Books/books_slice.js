import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/useHttp";
import { BOOKS_API } from "../../config";

const initialState = {
  books: [],
  loading: "notLoading",
};

export const fetchBooks = createAsyncThunk("books/fecthBooks", async () => {
  const { request } = useHttp();
  const data = await request(BOOKS_API + "new");
  return data.books;
});

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.books = action.payload;
        state.loading = "notLoading";
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.loading = "error";
      });
  },
});

const { reducer, actions } = booksSlice;
export default reducer;
