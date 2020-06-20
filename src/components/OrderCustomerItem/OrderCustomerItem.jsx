import React from "react";
import {
  OrderItemsContainer,
  OrderItem,
  OrderItemImg,
} from "./OrderCustomerItem.styles";
import { convertToPersian } from "../../shared/utility";

const OrderCustomerItem = ({ id, name, imageUrl, price, quantity }) => {
  return (
    <OrderItemsContainer>
      <OrderItem className="item-id">
        {convertToPersian(id.toString())}
      </OrderItem>
      <OrderItem className="item-name">{name}</OrderItem>
      <OrderItem className="item-img">
        <OrderItemImg src={imageUrl} alt={name} />
      </OrderItem>
      <OrderItem>{convertToPersian(price.toString())} تومان</OrderItem>
      <OrderItem className="item-quantity">
        {convertToPersian(quantity.toString())}
      </OrderItem>
    </OrderItemsContainer>
  );
};

export default OrderCustomerItem;
