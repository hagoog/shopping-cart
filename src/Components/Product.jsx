import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  return (
    <div className="product">
      <img className="product-img" src={productImage} />
      <div className="product-description">
        <p>
          <b>{productName}</b>
        </p>
        <div className="product-price">$ {price}</div>
        <button className="add-btn" onClick={() => addToCart(id)}>
          Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
      </div>
    </div>
  );
};

export default Product;
