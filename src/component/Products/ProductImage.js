import React from "react";

function ProductImage(props) {
  const { productImage, name } = props;
  console.log("Product Images ====>>> ", productImage);
  return (
    <div className="card-image">
      <figure className="image is-4by3">
        <img src={productImage} alt={name}></img>
      </figure>
    </div>
  );
}

export default ProductImage;
