import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addaProduct } from "../store/productSlice";
import { Link } from "react-router-dom";

const AddProduct = () => {
  const [formImg, setFormImg] = useState("");
  const [input, setInput] = useState({
    id: "",
    title: "",
    description: "",
    price: "",
    // img: {formImg},
    quantity: "",
  });

  const dispatch = useDispatch();

  const handleformSubmit = (e) => {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const data = input;
    data.img = formImg;
    console.log(data, "---DATA");
    dispatch(addaProduct(data));
  };

  const formImage = (e) => {
    const list = URL.createObjectURL(e.target.files[0]);
    console.log("--", list);
    setFormImg(list);
  };

  return (
    <>
      <h1 className="heading">Form</h1>
      <div className="form">
        <form onSubmit={handleformSubmit}>
          <label>id</label>
          <input
            type="number"
            placeholder="enter id"
            value={input.id}
            name="id"
            onChange={handleformSubmit}
          />
          <br />
          <label>Title</label>
          <input
            type="text"
            placeholder="enter title"
            value={input.title}
            name="title"
            onChange={handleformSubmit}
          />
          <br />
          <label>Product Color</label>
          <input
            type="text"
            placeholder="enter product color"
            value={input.description}
            name="description"
            onChange={handleformSubmit}
          />
          <br />
          <label>Price</label>
          <input
            type="number"
            placeholder="enter price"
            value={input.price}
            name="price"
            onChange={handleformSubmit}
          />
          <br />
          <label>Image</label>
          {/* <input
            type="url"
            placeholder="enter image url"
            value={input.img}
            name="img"
            onChange={handleformSubmit}
          /> */}
          <input
            type="file"
            //name="img"
            //value={input.formImg}
            onChange={formImage}
          />
          <br />
          <label>quantity</label>
          <input
            type="number"
            placeholder="enter quantity"
            value={input.quantity}
            name="quantity"
            onChange={handleformSubmit}
          />
          <br />
          <Link to="/">
            {
              <button type="submit" 
              onClick={handleSubmit}
              className="btn-dark mt-3">
                Submit
              </button>
            }
          </Link>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
