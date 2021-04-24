import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductImage from "./ProductImage";
import ShowCart from "../pages/ShowCart";
import { Link } from "react-router-dom";

function Product(props) {
  const urlRec = "http://54.91.179.78:5500";
  const [response, setResponse] = useState([]);

  const [cart, setcart] = useState();
  const { product, setproduct } = useState();

  const [isPreviewShown, setPreviewShown] = useState(false);

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    const response = await axios.get(`${urlRec}/products`);
    console.log("Response ", response.data);
    setResponse(response.data);
  };

  const addTocart = async () => {
    const data = await axios.get(`${urlRec}/cart`);

    setcart(data.data.cart);
    console.log(cart);

    // if(!cart)setproduct(cart);
  };
  const onDelete = async (id) => {
    // e.preventDefault();
    const resData = await axios.delete(`${urlRec}/products/${id}`);
    console.log(resData);
    setPreviewShown(true);
    loadProduct();
    //console.log(product);
  };
  console.log("result ---");
  return (
    <div className="columns is-multiline">
      {response.map((result) => (
        <div className="column is-3" key={result._id}>
          <div>
            <ProductImage
              productImage={urlRec + result.productImage}
              alt={result.name}
            />
          </div>
          <br></br>
          <div className="columns">
            <div className="column is-6">
              <Link
                type="submit"
                className="button is-dark"
                to={`/update/${result._id}`}
              >
                Update
              </Link>
            </div>
            <div className="column is-6">
              {
                <button
                  type="submit"
                  className="button is-dark"
                  onClick={() => onDelete(result._id)}
                >
                  Delete
                </button>
              }
              {isPreviewShown && <ShowCart />}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;
