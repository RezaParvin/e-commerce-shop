import React from "react";
import "./Custom-Button.scss";

const CustomButton = ({ children, width, ...otherProps }) => {
  return (
    <button
      className="btn-custom"
      {...otherProps}
      style={width ? { width: width } : null}
    >
      {children}
    </button>
  );
};

export default CustomButton;
