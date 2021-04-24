import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import ProductImage from "./ProductImage";

function Update() {
  const { id } = useParams();
  const [cart, setcart] = useState({});
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const urlRec = "http://54.91.179.78:5500:5500";

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const result = await axios.get(`${urlRec}/${id}`);
    console.log(result.data);
    setcart(result.data.product);
  };

  const updateProduct = async (id) => {
    const payLoad = { name, price };

    const resData = await axios.patch(`${urlRec}/${id}`, payLoad);
    if (resData) {
      getData();
    }
  };
  return (
    <div className="columns is-multiline">
      <div className="column is-3" key={cart._id}>
        <div className="ml-4 mt-5">
          <ProductImage
            productImage={urlRec + cart.productImage}
            alt={cart.name}
          ></ProductImage>
        </div>
        <div>
          <input
            type="text"
            defaultValue={cart.name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            defaultValue={cart.price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <br></br>
        <div className="columns">
          <div className="column is-6">
            <button
              className="button is-info"
              onClick={() => updateProduct(cart._id)}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Update;
