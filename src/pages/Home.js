import React from "react";
import Products from "../components/Products";

const Home = () => {
  return (
    <>
      <div className="heading">
        <h2>Welcome to the redux toolkit store</h2>
        <h3>Products</h3>
      </div>
      <section>
        <Products />
      </section>
    </>
  );
};

export default Home;  
