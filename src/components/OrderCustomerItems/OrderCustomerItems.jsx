import React from "react";
import withSpinner from "../withSpinner/withSpinner";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsLoading } from "../../redux/selectors/order";
import { compose } from "redux";
import UserOrder from "../UserOrder/UserOrder";

const OrderCustomerItems = ({ orders }) => {
  return (
    <div>
      {orders.reverse().map(({ id, ...otherProps }) => (
        <UserOrder key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading,
});

export default compose(
  connect(mapStateToProps),
  withSpinner
)(OrderCustomerItems);
