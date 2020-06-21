import React from "react";
import withSpinner from "../withSpinner/withSpinner";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsLoading } from "../../redux/selectors/order";
import { compose } from "redux";
import UserOrder from "../UserOrder/UserOrder";
import { OrderCustomerEmpty } from "./OrderCustomerItems.styles";

const OrderCustomerItems = ({ orders }) => {
  let finalResult = (
    <OrderCustomerEmpty>سفارشی ثبت نشده است</OrderCustomerEmpty>
  );
  if (orders.length > 1) {
    finalResult = orders
      .reverse()
      .map(({ id, ...otherProps }) => <UserOrder key={id} {...otherProps} />);
  }
  return <div>{finalResult}</div>;
};

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading,
});

export default compose(
  connect(mapStateToProps),
  withSpinner
)(OrderCustomerItems);
