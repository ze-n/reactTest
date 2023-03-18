import React from "react";
import { PRODUCTS } from "../../products";
import Product from "./Product";
import "./Shop.css";
import "./Product.css";
export default function Shop() {
  return (
    <div className="shop">
      <div className="container shop__container">
        <h2 className="shop__title">Popular Products</h2>
        <div className="shop__products">
          {PRODUCTS.map((product) => (
            <Product data={product} className="product" />
          ))}
        </div>
      </div>
    </div>
  );
}
