import React from "react";
import "./Cart-dropdown-item.scss";
import {
  CartDropDownItemContainer,
  CartImageContainer,
  CartNamePriceContainer,
  ClearButtonContainer,
} from "./Cart-dropdown-item-styles";
import { convertToPersian } from "../../../shared/utility";

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
          <span>{convertToPersian(quantity.toString())}</span>
          <span>&#10008;</span>
          <span>{convertToPersian(price.toString())} تومان</span>
        </div>
      </CartNamePriceContainer>
      <ClearButtonContainer onClick={onRemoveCartItem}>
        &#10005;
      </ClearButtonContainer>
    </CartDropDownItemContainer>
  );
};

export default CartDropDownItem;
