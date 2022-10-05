import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyitem } from "../store/buySlice";
import "./buynow.css";
import { BsPlusLg } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";
import { VscChromeClose } from "react-icons/vsc";
import { incre, decre } from "../store/cartSlice1";
import { Proquantity } from "../store/cartSlice1";
import { removeItem } from "../store/buySlice";
import {Link }from 'react-router-dom'

const BuyNow = () => {
  const dispatch = useDispatch();
  const products = useSelector(buyitem);
  const Productquantity = useSelector(Proquantity); // show quantity

  let itemprice = 0; // for total price calculation

  const TotalPrice = (price, id) => {  // for total price calculation according to item
    price = Productquantity * price;
    itemprice += price;
  };

  const Removeitem = (item) => {
    dispatch(removeItem(item));
  };


  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center gy-5">
          {products.map((item) => (
            <div className="card" key={item.id} style={{ width: "18rem" }}>
              <i onClick={() => Removeitem(item.id)}>
                <VscChromeClose />
              </i>
              <img
                className="card-img-top "
                src={item.img}
                alt="wrong"
                style={{ width: "263px", height: "200px" }}
              />
              <h5 className="card-title">{item.title}</h5>
              <h4 className="card-title">{item.description}</h4>
              <h5 onChange={TotalPrice(item.price, item.id)}>
                Price : {item.price}
              </h5>
              <div className="quantity">
                <p
                  className="decre"
                  onClick={() => dispatch(decre(item.quantity))}
                >
                  <AiOutlineMinus />
                </p>
                <p className="Pquantity">{Productquantity} </p>
                <p
                  className="incre"
                  onClick={() => dispatch(incre(item.quantity))}
                >
                  <BsPlusLg />
                </p>
              </div>
            </div>
          ))}
          <h1 className="totalprice">Total Price : -- {itemprice} </h1>
          <Link to="/">
          <button className="btn btn-primary">Checkout</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BuyNow;