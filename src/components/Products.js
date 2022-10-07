import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../store/cartSlice";
import { productlist } from "../store/productSlice";
import { removeProduct } from "../store/productSlice";
import { VscChromeClose } from "react-icons/vsc";
import { BsCurrencyBitcoin } from "react-icons/bs";
import "./product.css";
import { itemadd } from "../store/buySlice";
import { Link } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch();

  const updateList = useSelector(productlist);

  const handleAdd = (product) => {
    dispatch(addCart(product));
  };

  const handleBuy = (product) => {
    dispatch(itemadd([product]));
  };

  const handleRemove = (item) => {
    dispatch(removeProduct(item));
  };
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center gy-5">
          {updateList.map((product) => (
            <div
              className="card"
              key={product.id}
              style={{ width: "20rem", height: "22rem" }}
            >
              <i onClick={() => handleRemove(product.id)}>
                <VscChromeClose />
              </i>
              <img
                className="card-img-top"
                alt="wrong"
                src={product.img}
                style={{ width: "294px", height: "170px" }}
              />
              <h4 className="card-title">{product.title}</h4>
              <h4 className="card-title">{product.description}</h4>
              <h6>
                Price : {product.price}
                <BsCurrencyBitcoin />
              </h6>

              <div className="select">
                <button onClick={() => handleAdd(product)} className="BuyNow">
                  Add to cart
                </button>
                <Link to="/buynow">
                  {
                    <button
                      onClick={() => handleBuy(product)}
                      className="BuyNow"
                    >
                      BuyNow
                    </button>
                  }
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
