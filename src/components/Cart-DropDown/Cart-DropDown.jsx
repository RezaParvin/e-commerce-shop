import React from "react";
import "./Cart-DropDown.scss";
import CustomButton from "../Custom-Button/Custom-Button";
import CartDropDownItem from "./Cart-dropDown-item/Cart-dropdown-item";


import {
  DropDown,
  CartItemsContainer,
  EmptyCartItems,
  BtnCheckoutContainer,
} from "./Cart-DropDown-styles";

const CartDropDown = ({
  cartItems,
  onRemoveCartItem,
  history,
  onToggleDropDown,
}) => {
  return (
    <DropDown>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((item) => (
            <CartDropDownItem
              key={item.id}
              item={item}
              onRemoveCartItem={() => {
                onRemoveCartItem(item);
              }}
            />
          ))
        ) : (
          <EmptyCartItems>محصولی وجود ندارد</EmptyCartItems>
        )}
      </CartItemsContainer>
      <BtnCheckoutContainer>
        <CustomButton
          width="100%"
          onClick={() => {
            onToggleDropDown();
            history.push("/checkout");
          }}
        >
          نهایی کردن
        </CustomButton>
      </BtnCheckoutContainer>
    </DropDown>
  );
};

export default CartDropDown;
