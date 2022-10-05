import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "Samsung S21",
    description: "black in color",
    price: 12000,
    img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    quantity: 1,
  },
  {
    id: 2,
    title: "Samsung M21",
    description: "white in color",
    price: 12300,
    img: "https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    quantity: 1,
  },
  {
    id: 3,
    title: "Samsung A21",
    description: "black in color",
    price: 13500,
    img: "https://images-na.ssl-images-amazon.com/images/I/71A9Vo1BatL._SL1500_.jpg",
    quantity: 1,
  },
  {
    id: 4,
    title: "Iphone 12",
    description: "Best mobile ever",
    price: 20500,
    img: "https://images-na.ssl-images-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg",
    quantity: 1,
  },
  {
    id: 5,
    title: "Redmi 10",
    description: "black in color",
    price: 12500,
    img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    quantity: 1,
  },
  {
    id: 6,
    title: "Realme",
    description: "black in color",
    price: 13500,
    img: "https://images-na.ssl-images-amazon.com/images/I/71A9Vo1BatL._SL1500_.jpg",
    quantity: 1,
  },
  {
    id: 7,
    title: "Samsung",
    description: "black in color",
    price: 22500,
    img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    quantity: 1,
  },
  {
    id: 8,
    title: "Iphone 10",
    description: "Best mobile ever",
    price: 30500,
    img: "https://images-na.ssl-images-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg",
    quantity: 1,
  },
  {
    id: 9,
    title: "Oppo",
    description: "black in color",
    price: 12500,
    img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    quantity: 1,
  },
  {
    id: 10,
    title: "Vivo",
    description: "black in color",
    price: 12000,
    img: "https://m.media-amazon.com/images/I/61+g8YugcML._AC_UY218_.jpg",
    quantity: 1,
  },
];

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    removeProduct(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    addaProduct(state, action) {
      state.push(action.payload);
    },
    productSearch(state, action) {
      // return state.filter((item) => item.title === action.payload);
        return state=action.payload;
    },
    handleReset1(state, action) { 
      return state=action.payload;
    }
  },
});

export const productlist = (state) => state.product;

export const { removeProduct, addaProduct, productSearch, handleReset1 } =
  productSlice.actions;

export default productSlice.reducer;