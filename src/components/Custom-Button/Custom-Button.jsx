import React from "react";
import "./Custom-Button.scss";
import { ButtonContainer } from "./Custom-Button-styles";

const CustomButton = (props) => {
  return <ButtonContainer {...props}>{props.children}</ButtonContainer>;
};

export default CustomButton;
