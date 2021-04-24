import React from "react";
import Product from "../Products/Product";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="section">
      <Link to={"/add"}>
        <button className="button is-info add">Add Product</button>
      </Link>

      <div className="container">
        <Product></Product>
      </div>
    </div>
  );
};

export default Home;
