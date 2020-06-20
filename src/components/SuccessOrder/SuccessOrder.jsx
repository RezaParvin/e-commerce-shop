import React from "react";
import {
  SuccessOrderContainer,
  ConfirmLogoContainer,
  SuccessOrderTitle,
  ConfirmLogoStyled,
} from "./SuccessOrder.styles";
import CustomButtom from "../Custom-Button/Custom-Button";
import { connect } from "react-redux";
import {
  restartIsSuccess,
  clearCartAfterOrder,
} from "../../redux/actions/index";

const SuccessOrder = ({ title, onRestartIsSuccess, onClearCartAfterOrder }) => {
  const onClickConfirmBtn = () => {
    onRestartIsSuccess();
    onClearCartAfterOrder();
  };

  return (
    <SuccessOrderContainer>
      <SuccessOrderTitle>{title}</SuccessOrderTitle>
      <ConfirmLogoContainer>
        <ConfirmLogoStyled />
      </ConfirmLogoContainer>
      <CustomButtom width="80px" onClick={onClickConfirmBtn}>
        تایید
      </CustomButtom>
    </SuccessOrderContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onRestartIsSuccess: () => dispatch(restartIsSuccess()),
  onClearCartAfterOrder: () => dispatch(clearCartAfterOrder()),
});

export default connect(null, mapDispatchToProps)(SuccessOrder);
