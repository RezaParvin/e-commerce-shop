import React from "react";
import "./Cart-dropdown-item.scss";
import {
  CartDropDownItemContainer,
  CartImageContainer,
  CartNamePriceContainer,
  ClearButtonContainer,
} from "./Cart-dropdown-item-styles";

const CartDropDownItem = ({ item, onRemoveCartItem }) => {
  const { name, imageUrl, price, quantity } = item;

  return (
    <CartDropDownItemContainer>
      <CartImageContainer>
        <img src={imageUrl} alt="" />
      </CartImageContainer>
      <CartNamePriceContainer>
        <span>{name}</span>
        <div>
          <span>{price}$</span>
          <span>&#10008;</span>
          <span>{quantity}</span>
        </div>
      </CartNamePriceContainer>
      <ClearButtonContainer onClick={onRemoveCartItem}>
        &#10005;
      </ClearButtonContainer>
    </CartDropDownItemContainer>
  );
};

export default CartDropDownItem;
