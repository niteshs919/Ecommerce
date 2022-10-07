import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart(state, action) {
      if (state.findIndex((item) => item.id === action.payload.id)) {
        state.push(action.payload);
      }
    // if (state.filter((item) => item.id === action.payload.id)) {
    //         return state.push(action.payload);
    //        }
       else {
        alert("Product allready added");
      }
    },
    removeItem(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const cartItem = (state) => state.cart;
export const { addCart, removeItem } = cartSlice.actions; // this are action

export default cartSlice.reducer; // this is reducer function
