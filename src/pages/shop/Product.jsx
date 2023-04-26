import React, { useContext } from "react";
import ShopContext from "../../ContextAPI/ShopContext";

const Product = (props) => {
  const { id, productName, productImage, price } = props.data;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="product">
      <img src={productImage} alt="" />

      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>$ {price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart
      </button>
        
    </div>
  );
};

export default Product;
