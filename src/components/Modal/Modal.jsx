import React from "react";
import { ModalContainer } from "./Modal.styles";

const Modal = ({ children,show}) => {
  return <ModalContainer show={show}>{children}</ModalContainer>;
};

export default Modal;
