import React from "react";
import {
  UserOrderContainer,
  OrderHeaderItem,
  UserOrderHeader,
  HeaderTitle,
  OrderCustomerContainer,
  OrderCustomerHeader,
  OrderCustomerTitle,
  OrderCustomerContainerMain,
  OrderTotalPrice,
} from "./UserOrder.styles";
import { orderCustomerTitles } from "../../shared/customer-data";
import OrderCustomerItem from "../OrderCustomerItem/OrderCustomerItem";
import {
  priceSeperator,
  convertToPersian,
  convertDateToPersian,
} from "../../shared/utility";

const UserOrder = ({
  created_at,
  order_status,
  payment_status,
  userOrder: { items, totalPrice },
}) => {

  return (
    <UserOrderContainer>
      <UserOrderHeader>
        <OrderHeaderItem>
          <HeaderTitle>تاریخ سفارش</HeaderTitle> :{" "}
          {convertDateToPersian(new Date(created_at))}
        </OrderHeaderItem>
        <OrderHeaderItem>
          <HeaderTitle>وضعیت پرداخت</HeaderTitle> : {payment_status}
        </OrderHeaderItem>
        <OrderHeaderItem>
          <HeaderTitle>وضیعت سفارش</HeaderTitle> : {order_status}
        </OrderHeaderItem>
      </UserOrderHeader>
      <OrderCustomerContainer>
        <OrderCustomerHeader>
          {orderCustomerTitles.map((orderTitle, index) => (
            <OrderCustomerTitle index={index} key={index}>
              {orderTitle}
            </OrderCustomerTitle>
          ))}
        </OrderCustomerHeader>
        <OrderCustomerContainerMain>
          {items.map((item) => (
            <OrderCustomerItem key={item.id} {...item} />
          ))}
          <OrderTotalPrice>
            مبلغ کل : {priceSeperator(convertToPersian(totalPrice + "000"))}{" "}
            تومان
          </OrderTotalPrice>
        </OrderCustomerContainerMain>
      </OrderCustomerContainer>
    </UserOrderContainer>
  );
};

export default UserOrder;
