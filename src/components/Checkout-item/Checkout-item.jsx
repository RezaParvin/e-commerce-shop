import React from "react";
import "./Checkout-item.scss";

const CheckoutItem = (props) => {
  const { name, imageUrl, price, quantity } = props.item;
  const { onClearCartItem, onRemoveCartItem, onAddCartItem } = props;

  return (
    <div className="checkout-item">
      <div className="checkout-item-column">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="checkout-item-column">{name}</div>
      <div className="checkout-item-column quantity">
        <div className="quantity-btn" onClick={onAddCartItem}>
          &#10094;
        </div>
        <span>{quantity}</span>
        <div className="quantity-btn" onClick={onRemoveCartItem}>
          &#10095;
        </div>
      </div>
      <div className="checkout-item-column">{price}</div>
      <div className="checkout-item-column delete" onClick={onClearCartItem}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
