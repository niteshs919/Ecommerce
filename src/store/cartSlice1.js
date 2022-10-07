import { createSlice } from "@reduxjs/toolkit";

const cartSlice1 = createSlice({
    name:"cartS",
    initialState:1,
    reducers:{
        incre(state,action)
        {
          return state=state+action.payload
        },
        decre(state,action)
        {
          return state=state-action.payload
        }
    }
})

export const Proquantity = (state) => state.cartS

//console.log("---",state.itemQ);
export const {incre, decre} = cartSlice1.actions;

export default cartSlice1.reducer;