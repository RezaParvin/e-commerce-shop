import React from "react";
import "./CartIcon.scss";
import { ReactComponent as CartLogo } from "../../assets/images/cartIcon.svg";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/index";
import { selectCartItemsCount } from "../../redux/selectors/cart";
import { createStructuredSelector } from "reselect";
const CartIcon = ({ onToggleDropDownCart, cartItemsCount }) => {
  return (
    <div className="cart-icon" onClick={onToggleDropDownCart}>
      <CartLogo className="cart-logo" />
      <span className="cart-counter">{cartItemsCount}</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItemsCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleDropDownCart: () => {
      dispatch(actions.cartToggleDropDown());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
