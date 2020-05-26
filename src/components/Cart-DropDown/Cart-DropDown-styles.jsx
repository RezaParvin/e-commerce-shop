import styled from "styled-components";

export const DropDown = styled.div`
  width: 25%;
  border: 2px solid #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 0;
  top: 90%;
  z-index: 100;
  background-color: white;
  padding: 10px;
`;

export const CartItemsContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const EmptyCartItems = styled.p`
  font-size: 15px;
  text-align: center;
  color: rgb(90, 90, 90);
`;

export const BtnCheckoutContainer = styled.div`
  width: 75%;
  display: flex;
  justify-content: center;
`;
