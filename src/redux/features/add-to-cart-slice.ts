import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

const initialState: any = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
}

export const addToCart = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addInCart: (state, action: any) => {
      const existingItem = state.items.find((item:any) => item.id === action.payload.id);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      state.totalQuantity += 1;
      state.totalPrice += Number(action.payload.price);

      toast.success(`${action.payload.name} added to cart!`, { position: "top-right" });
    },
    removeFromCart: (state, action: any) => {
      const index = state.items.findIndex((item:any) => item.id === action.payload);
      if (index !== -1) {
        const item = state.items[index];
        state.totalQuantity -= item.quantity;
        state.totalPrice -= item.price * item.quantity;
        state.items.splice(index, 1);
      }
    },
    incrementQuantity: (state, action: any) => {
      const item = state.items.find((item:any) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += item.price;
      }
    },

    decrementQuantity: (state, action: any) => {
      const item = state.items.find((item:any) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalPrice -= item.price;
      } else if (item) {
        state.items = state.items.filter((cartItem:any) => cartItem.id !== action.payload);
        state.totalQuantity -= 1;
        state.totalPrice -= item.price;
      }
    },

  },
})

// Action creators are generated for each case reducer function
export const { addInCart, removeFromCart, incrementQuantity, decrementQuantity } = addToCart.actions

export default addToCart.reducer