import React from "react";
import { PRODUCTS } from "./Products";
import Product from "./Product";
import "./Shop.css";

const Shop = () => {
  return (
    <main className="shop">
      <div className="shop-title">
        <h1>HAGOOG Shop</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </main>
  );
};

export default Shop;
