import React from "react";
import "./CartIcon.scss";
import { ReactComponent as CartLogo } from "../../assets/images/cartIcon.svg";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/index";

const CartIcon = ({ onToggleDropDownCart }) => {
  return (
    <div className="cart-icon" onClick={onToggleDropDownCart}>
      <CartLogo className="cart-logo" />
      <span className="cart-counter">0</span>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    onToggleDropDownCart: () => {
      dispatch(actions.cartToggleDropDown());
    },
  };
};
export default connect(null, mapDispatchToProps)(CartIcon);
