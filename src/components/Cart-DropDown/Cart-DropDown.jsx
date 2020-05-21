import React from "react";
import "./Cart-DropDown.scss";
import CustomButton from "../Custom-Button/Custom-Button";

const CartDropDown = () => {
  return (
    <div className="cart-dropdown">
      <div
        style={{
          marginTop: "auto",
          width: "75%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CustomButton width="100%">نهایی کردن</CustomButton>
      </div>
    </div>
  );
};

export default CartDropDown;
