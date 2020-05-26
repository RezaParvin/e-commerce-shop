import React from "react";
import "./Cart-DropDown.scss";
import CustomButton from "../Custom-Button/Custom-Button";
import CartDropDownItem from "./Cart-dropDown-item/Cart-dropdown-item";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/selectors/cart";
import * as actions from "../../redux/actions/index";
import { withRouter } from "react-router-dom";
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
