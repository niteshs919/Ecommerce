import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../store/cartSlice";
import { cartItem } from "../store/cartSlice";
import { VscChromeClose } from "react-icons/vsc";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { Link } from "react-router-dom";
import { itemadd } from "../store/buySlice";

import "./cart.css";

const Cart = () => {
  const product = useSelector(cartItem);  

  const dispatch = useDispatch();

  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  const handleBuy = (item) => {
    dispatch(itemadd(item));
  };

  let itemPrice = 0;
  const handleprice = (price) => {
    itemPrice += price;
  };
  return (
    <div>
      <h3 className="heading">Cart </h3>
      <div className="container">
        <div className="row d-flex justify-content-center gy-5">
          {product.map((item) => (
            <div className="card" key={item.id} style={{ width: "18rem"}}>
              <i onClick={() => handleRemove(item.id)}>
                <VscChromeClose />
              </i>
              <img
                className="card-img-top "
                src={item.img}
                alt="wrong"
                style={{ width: "263px", height: "200px" }}
              />
              <h5 className="card-title">{item.title}</h5>
              <h5 onChange={handleprice(item.price)}>
                Price : {item.price}
                <BsCurrencyBitcoin />
              </h5>
            </div>
          ))}
        </div>
        <div className="disable">
        <Link to="/buynow">
                {
                  <button
                    onClick={() => handleBuy(product.map((val)=>val))}
                    className="btn btn-primary"
                  
                  >
                    Buy Now
                  </button>
                }
              </Link>
        <h1 className="totalprice" >{itemPrice}</h1>
        </div>
      </div>
    </div>
  );
};

export default Cart;