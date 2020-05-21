import React from "react";
import "./Custom-Button.scss";

const CustomButton = ({
  children,
  width,
  signInWithGoogle,
  inCollection,
  ...otherProps
}) => {
  return (
    <button
      className={`${inCollection ? "in-collection" : ""} ${
        signInWithGoogle ? "btn-google" : ""
      } btn-custom`}
      {...otherProps}
      style={width ? { width: width } : null}
    >
      {children}
    </button>
  );
};

export default CustomButton;
