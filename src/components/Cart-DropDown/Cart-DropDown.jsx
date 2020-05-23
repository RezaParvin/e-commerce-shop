import React from "react";
import "./Cart-DropDown.scss";
import CustomButton from "../Custom-Button/Custom-Button";
import CartDropDownItem from "./Cart-dropDown-item/Cart-dropdown-item";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/selectors/cart";
import * as actions from "../../redux/actions/index";
import { withRouter } from "react-router-dom";

const CartDropDown = ({
  cartItems,
  onRemoveCartItem,
  history,
  onToggleDropDown,
}) => {
  return (
    <div className="cart-dropdown">
      <div className="contaienr-cart-items">
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
          <p className='empty-cart-items'>محصولی وجود ندارد</p>
        )}
      </div>
      <div className="container-btn-checkout">
        <CustomButton
          width="100%"
          onClick={() => {
            onToggleDropDown();
            history.push("/checkout");
          }}
        >
          نهایی کردن
        </CustomButton>
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
  onToggleDropDown: () => {
    dispatch(actions.cartToggleDropDown());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CartDropDown));
