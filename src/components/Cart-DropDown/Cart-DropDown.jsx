import React from "react";
import "./Cart-DropDown.scss";
import CustomButton from "../Custom-Button/Custom-Button";
import CartDropDownItem from "./Cart-dropDown-item/Cart-dropdown-item";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/selectors/cart";
import * as actions from "../../redux/actions/index";

const CartDropDown = ({ cartItems, onRemoveCartItem }) => {
  return (
    <div className="cart-dropdown">
      <div className="contaienr-cart-items">
        {cartItems.map((item) => (
          <CartDropDownItem
            key={item.id}
            item={item}
            onRemoveCartItem={() => {
              onRemoveCartItem(item);
            }}
          />
        ))}
      </div>
      <div className="container-btn-checkout">
        <CustomButton width="100%">نهایی کردن</CustomButton>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  onRemoveCartItem: (item) => {
    dispatch(actions.removeItemToCart(item));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDropDown);
