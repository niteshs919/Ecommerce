import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cartItem } from "../store/cartSlice";
import { useState } from "react";
import { productlist } from "../store/productSlice";
import { productSearch, handleReset1 } from "../store/productSlice";

const Navbar = () => {
  const item = useSelector(cartItem);
  const list = useSelector(productlist);
  const [data, setData] = useState(list);
  const [searchInput, setsearchInput] = useState("");

  const dispatch = useDispatch();

  const handleSearch = () => {
    setData(list);
    const search = list.filter(
      (items) => items.title[0].toLowerCase() === searchInput[0].toLowerCase()
    );
    dispatch(productSearch(search));
  };

  const handleReset = () => {
    setsearchInput("");
    dispatch(handleReset1(data));
  };

  return (
    <div className="heading1">
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/cart">
          Cart
        </Link>
        <Link className="navLink" to="/addaproduct">
          Add New Product
        </Link>
        <input
          className="search"
          placeholder="Search here....."
          value={searchInput}
          onChange={(e) => setsearchInput(e.target.value)}
        ></input>
        <button className="searchBut" onClick={handleSearch}>
          Search
        </button>
        <button className="searchBut" onClick={handleReset}>
          Reset
        </button>
        <Link to="/cart">
          <span className="cartCount">Cart item: {item.length}</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;