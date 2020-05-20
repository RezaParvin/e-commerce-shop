import React from "react";
import "./Custom-Button.scss";

const CustomButton = ({ children, width, signInWithGoogle, ...otherProps }) => {
  return (
    <button
      className={`${signInWithGoogle ? "btn-google" : ""} btn-custom`}
      {...otherProps}
      style={width ? { width: width } : null}
    >
      {children}
    </button>
  );
};

export default CustomButton;
