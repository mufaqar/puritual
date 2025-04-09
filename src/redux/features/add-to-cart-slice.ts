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
    addInCart: (state, action: { payload: { id: string; name: string; price: number; quantity: number } }) => {
      const { id, name, price, quantity } = action.payload;
      const existingItem = state.items.find((item: any) => item.id === id);
    
      if (existingItem) {
        existingItem.quantity = quantity;
      } else {
        state.items.push({
          ...action.payload,
          quantity: quantity > 1 ? quantity : 1,
        });
      }
    
      // Update totals
      state.totalQuantity = state.items.reduce((sum: number, item: any) => sum + item.quantity, 0);
      state.totalPrice = Number(
        state.items.reduce((sum: number, item: any) => sum + item.price * item.quantity, 0)
      );
    
      toast.success(`${name} added to cart!`, { position: 'bottom-left' });
    },
    
    removeFromCart: (state, action: any) => {
      const index = state.items.findIndex((item:any) => item.id === action.payload);
      if (index !== -1) {
        const item = state.items[index];
        state.totalQuantity -= item.quantity;
        state.totalPrice -= Number(item.price) * item.quantity;
        state.items.splice(index, 1);
      }
    },
    incrementQuantity: (state, action: any) => {
      const item = state.items.find((item:any) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += Number(item.price);
      }
    },

    decrementQuantity: (state, action: any) => {
      const item = state.items.find((item:any) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalPrice -= Number(item.price);
      } else if (item) {
        state.items = state.items.filter((cartItem:any) => cartItem.id !== action.payload);
        state.totalQuantity -= 1;
        state.totalPrice -= Number(item.price);
      }
    },

  },
})

// Action creators are generated for each case reducer function
export const { addInCart, removeFromCart, incrementQuantity, decrementQuantity } = addToCart.actions

export default addToCart.reducer