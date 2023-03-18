import React from "react";

export default function Product(props) {
  const { id, productName, productPrice, productImage } = props.data;
  return (
    <div className="product">
      <img src={productImage} alt="product" className="product__image" />
      <div className="product__details">
        <p className="product__name">{productName}</p>
        <p className="product__price">{productPrice}</p>
      </div>
    </div>
  );
}
