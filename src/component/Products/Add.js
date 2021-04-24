import React, { useState, useEffect } from "react";
import axios from "axios";

const fs = require("fs");

function Update() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const urlRec = "http://54.91.179.78:5500/products";

  const addProduct = async (id) => {
    let formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("productImage", image);
    console.log(formData);

    const result = await axios.post(urlRec, formData);
    console.log("result", result);
    // axios.post(urlRec, formData).then((res) => {
    //   console.log(res);
    //   console.log(res.data);
    // });
  };
  return (
    <div className="columns is-multiline">
      <div className="column is-3">
        <div>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            accept="png jpg jpeg"
          />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <br></br>
        <div className="columns">
          <div className="column is-6">
            <button className="button is-info" onClick={() => addProduct()}>
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Update;
