import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectUserOrders } from "../../redux/selectors/order";
import { getUserOrdersInitial } from "../../redux/actions/order";
import { OrderPageContainer } from "./OrderPage.styles";
import OrderCustomerItems from "../../components/OrderCustomerItems/OrderCustomerItems";

const OrderPage = ({ orders, onGetUserOrdersInitial }) => {
  useEffect(() => {
    onGetUserOrdersInitial();
  }, [onGetUserOrdersInitial]);

  return (
    <OrderPageContainer>
      <OrderCustomerItems orders={orders} />
    </OrderPageContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onGetUserOrdersInitial: () => {
    dispatch(getUserOrdersInitial());
  },
});

const mapStateToProps = createStructuredSelector({
  orders: selectUserOrders,
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderPage);
