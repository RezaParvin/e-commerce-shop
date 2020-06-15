import React, { Component } from "react";
import "./checkout.scss";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import {
  selectCartItems,
  selectCartItemsTotal,
} from "../../redux/selectors/cart";
import { convertToPersian } from "../../shared/utility";
import CheckoutItem from "../../components/Checkout-item/Checkout-item";
import * as actions from "../../redux/actions/index";
import CustomButton from "../../components/Custom-Button/Custom-Button";

class Checkout extends Component {
  render() {
    const { cartItems, dispatch, totalPrice, history } = this.props;

    return (
      <div className="checkout-page">
        <div className="container-checkout">
          <div className="header-checkout">
            <div className="header-column">
              <span>محصول</span>
            </div>
            <div className="header-column">
              <span>توضیحات</span>
            </div>
            <div className="header-column">
              <span>تعداد</span>
            </div>
            <div className="header-column">
              <span>قیمت</span>
            </div>
            <div className="header-column">
              <span>حذف</span>
            </div>
          </div>
          <div className="main-checkout">
            {cartItems.length ? (
              cartItems.map((item) => (
                <CheckoutItem
                  key={item.id}
                  item={item}
                  onClearCartItem={() => {
                    dispatch(actions.clearItemOfCart(item));
                  }}
                  onRemoveCartItem={() => {
                    dispatch(actions.removeItemToCart(item));
                  }}
                  onAddCartItem={() => {
                    dispatch(actions.addItemToCart(item));
                  }}
                />
              ))
            ) : (
              <p className="empty-cart-items">هیچ محصولی وجود ندارد</p>
            )}
          </div>
          <div className="footer-checkout">
            <span>
              مبلغ کل : <span>{convertToPersian(totalPrice + "000")}</span>{" "}
              تومان
            </span>
            <CustomButton
              width="130px"
              onClick={() => {
                history.push("/contact");
              }}
            >
              مرحله بعد
            </CustomButton>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartItemsTotal,
});

export default connect(mapStateToProps)(Checkout);
