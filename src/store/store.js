
import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./cartSlice";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice1";
import buySlice from "./buySlice";

const store = configureStore({
    reducer:{
        cart:Reducer, 
        product:productSlice,
        cartS:cartSlice,
        buy:buySlice,
    },
})

export default store;