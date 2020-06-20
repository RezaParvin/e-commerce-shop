import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import withSpinner from "../withSpinner/withSpinner";
import { compose } from "redux";
import CustomerProfile from "./CustomerProfile";
import { addUserOrderInitial } from "../../redux/actions/order";
import {
  selectIsLoading,
  selectErrorAddOrder,
  selectCurrentUser,
  selectCartItems,
  selectCartItemsTotal,
  selectIsSussess,
} from "../../redux/selectors/order";

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartItemsTotal,
  currentUser: selectCurrentUser,
  isLoading: selectIsLoading,
  error: selectErrorAddOrder,
  isSuccess: selectIsSussess,
});

const mapDispatchToProps = (dispatch) => ({
  onAddUserOrder: (order) => {
    dispatch(addUserOrderInitial(order));
  },
});

const CustomerProfileContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withSpinner
)(CustomerProfile);

export default CustomerProfileContainer;
