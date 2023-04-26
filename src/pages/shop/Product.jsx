import React from "react";

const Product = (props) => {
  const { id, productName, productImage, price } = props.data;
  return (
    <div className="product">
      <img src={productImage} alt="" />

      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className="addToCartBttn">Add To Cart </button>
    </div>
  );
};

export default Product;