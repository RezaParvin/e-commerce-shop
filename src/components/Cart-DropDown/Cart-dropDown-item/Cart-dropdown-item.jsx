import React from "react";
import "./Cart-dropdown-item.scss";

const CartDropDownItem = ({ item, onRemoveCartItem }) => {
  const { name, imageUrl, price, quantity } = item;

  return (
    <div className="cart-item">
      <div className="cart-items-img">
        <img src={imageUrl} alt="" />
      </div>
      <div className="container-name-price">
        <span className="product-name">{name}</span>
        <div className="product-count-price">
          <span>{price}$</span>
          <span>&#10008;</span>
          <span>{quantity}</span>
        </div>
      </div>
      <div className="cart-item-clear" onClick={onRemoveCartItem}>
        &#10005;
      </div>
    </div>
  );
};

export default CartDropDownItem;
