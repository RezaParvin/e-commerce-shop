import { connect } from "react-redux";
import CartDropDown from "./Cart-DropDown";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { selectCartItems } from "../../redux/selectors/cart";
import * as actions from "../../redux/actions/index";

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

const CartDropDownContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(CartDropDown);

export default CartDropDownContainer;
