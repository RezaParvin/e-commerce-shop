import React from "react";
import "./Form-input.scss";

const FormInput = ({ label, onChangeHandler, ...otherProps }) => {
  return (
    <div className="group">
      <input
        {...otherProps}
        onChange={onChangeHandler}
        className="form-element-input"
      />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "Shrink" : null
          }  form-element-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
