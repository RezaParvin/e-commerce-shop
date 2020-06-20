import styled from "styled-components";

export const OrderItemsContainer = styled.div`
  display: flex;
  height: 100px;
  direction: rtl;
  align-items: center;
`;

export const OrderItem = styled.div`
  width: 20%;

  &.item-id {
    width: 10%;
  }
  &.item-name {
    width: 30%;
  }
  &.item-quantity {
    width: 10%;
  }
  &.item-img {
    width: 30%;
  }
`;

export const OrderItemImg = styled.img`
  display: block;
  width: 70px;
  height: 80px;
  object-fit: cover;
`;
