import React from "react";

const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  return (
    <div className="product">
      <img className="product-img" src={productImage} />
      <div className="product-description">
        <p>
          <b>{productName}</b>
        </p>
        <div className="product-price">$ {price}</div>
        <button className="add-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
