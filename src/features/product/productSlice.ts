import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../hooks/useProducts";

const productSlice = createSlice({
  name: "product",
  initialState: {
    productList: <Product[]>[],
    searchQuery: <string>"",
  },
  reducers: {
    setProducts: (state, action) => {
      state.productList = action.payload;
    },

    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      state.productList = state.productList.filter((product: Product) =>
        product.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },

    clearSearchQuery: (state, action) => {
      state.searchQuery = "";
      state.productList = action.payload;
    },
  },
});

export const { setProducts, setSearchQuery, clearSearchQuery } =
  productSlice.actions;
export default productSlice.reducer;
