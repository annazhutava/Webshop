import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, selectedSize } = action.payload;
      const item = state.products.find(
        (item) => item.id === id && item.selectedSize === selectedSize
      );

      if (item) {
        item.selectedQuantity += action.payload.selectedQuantity;
      } else {
        state.products.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.products = state.products.filter(
        (item) =>
          item.id !== action.payload.id ||
          item.selectedSize !== action.payload.selectedSize
      );
    },
    increaseQuantity: (state, action) => {
      const item = state.products.find(
        (item) =>
          item.id === action.payload.id &&
          item.selectedSize === action.payload.selectedSize
      );

      if (item) {
        item.selectedQuantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.products.find(
        (item) =>
          item.id === action.payload.id &&
          item.selectedSize === action.payload.selectedSize
      );

      if (item && item.selectedQuantity > 1) {
        item.selectedQuantity -= 1;
      }
    },
  },
});

export const { addToCart, removeItem, decreaseQuantity, increaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
