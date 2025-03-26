import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const sideCartSlice = createSlice({
  name: "sideCart",
  initialState,
  reducers: {
    openCart: (state) => {
      state.isOpen = true;
    },
    closeCart: (state) => {
      state.isOpen = false;
    },
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openCart, closeCart, toggleCart } = sideCartSlice.actions;
export default sideCartSlice.reducer;
