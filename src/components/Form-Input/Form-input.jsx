import React from "react";
import "./Form-input.scss";
import {
  InputElement,
  LabelElement,
  SelectElement,
  TextareaElement,
} from "./Form-input.styles";

const FormInput = React.memo(
  ({
    elementType,
    label,
    onChangeHandler,
    value,
    options,
    isValid,
    isTouched,
    ...otherProps
  }) => {
    let formInput;
    const finalValid = isTouched ? isValid : true;

    switch (elementType) {
      case "input":
        formInput = (
          <InputElement
            value={value}
            finalValid={finalValid}
            onChange={onChangeHandler}
            {...otherProps}
          />
        );
        break;

      case "select":
        formInput = (
          <SelectElement
            value={value}
            {...otherProps}
            onChange={onChangeHandler}
            finalValid={finalValid}
          >
            {Object.entries(options).map(([value, name]) => (
              <option value={value} key={value}>
                {name}
              </option>
            ))}
          </SelectElement>
        );
        break;

      case "textarea":
        formInput = (
          <TextareaElement
            finalValid={finalValid}
            value={value}
            onChange={onChangeHandler}
            {...otherProps}
          />
        );
        break;

      default:
        formInput = (
          <InputElement
            finalValid={finalValid}
            value={value}
            onChange={onChangeHandler}
            {...otherProps}
          />
        );
    }
    return (
      <div className="group">
        {formInput}
        {label && (
          <LabelElement className="form-element-label" value={value}>
            {label}
          </LabelElement>
        )}
      </div>
    );
  }
);

export default FormInput;
