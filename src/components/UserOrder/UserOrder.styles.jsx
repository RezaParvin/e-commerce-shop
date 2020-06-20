import styled from "styled-components";

export const UserOrderContainer = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.26);

  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const UserOrderHeader = styled.ul`
  background-color: #fca311;
  list-style-type: none;
  margin: 0;
  padding: 10px;
  display: flex;
  justify-content:space-evenly;
  direction: rtl;
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.25);
  font-size: 15px;
  border-radius: 10px 10px 0 0;
  box-sizing: border-box;
`;

export const OrderHeaderItem = styled.li`
  color: white;
`;

export const HeaderTitle = styled.span`
  display: inline-block;
  color: black;
`;

export const OrderCustomerContainer = styled.div`
  direction: rtl;
  padding:20px;
  font-size: 14px;
`;

export const OrderCustomerHeader = styled.div`
  width: 100%;
  display: flex;
  height: 50px;
  direction: rtl;
  align-items: center;
  border-bottom: 1px solid gray;
`;

const getIndexProp = ({ index }) => {
  switch (index) {
    case 0:
      return "10%";
    case 1:
      return "30%";
    case 2:
      return "30%";
    case 4:
      return "10%";
    default:
      return "20%";
  }
};
export const OrderCustomerTitle = styled.div`
  color: gray;
  width: ${getIndexProp};
`;

export const OrderCustomerContainerMain = styled.div`
  display: flex;
  flex-direction: column;
`;
export const OrderTotalPrice = styled.h3`
  color: green;
  direction: ltr;
`;
