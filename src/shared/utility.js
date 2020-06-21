import FormInput from "../components/Form-Input/Form-input.jsx";
import React from "react";
import * as jalali from "jalaali-js";

export const updateObject = (prevObject, newObject) => {
  return { ...prevObject, ...newObject };
};

export const convertToPersian = (str) => {
  let number = str.toString();

  let id = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return number.replace(/[0-9]/g, function (w) {
    return id[+w];
  });
};

export const checkOverallValid = (elementName, formElements) => {
  const resultOverall = Object.values(formElements).find((element) => {
    if (element.elementConfig.name === elementName) return false;
    return element.isValid === false;
  });
  if (resultOverall) return false;
  return true;
};

export const checkValidity = (rules, value) => {
  if (rules.isString) {
    const resultTest = /[0-9]/g.test(value);
    if (resultTest) return false;
  }
  if (rules.hasLength) {
    if (value.length !== rules.hasLength) return false;
  }
  if (rules.isNumber) {
    const resultTest = isFinite(value);
    if (!resultTest) return false;
  }
  if (rules.isEmpty) {
    const resultTest = value.length < 1;
    if (resultTest) return false;
  }

  return true;
};

export const CreateUserProfileObject = (formElements) => {
  return Object.entries(formElements).reduce(
    (acumulator, [fieldName, detail]) => {
      return Object.assign(acumulator, { [fieldName]: detail.value });
    },
    {}
  );
};

export const createFormElements = (form, onChangeHandler) => {
  return Object.values(
    form
  ).map(({ value, elementConfig, isValid, isTouched, elementType }, index) => (
    <FormInput
      elementType={elementType}
      value={value}
      key={index}
      isValid={isValid}
      isTouched={isTouched}
      onChangeHandler={onChangeHandler}
      {...elementConfig}
    />
  ));
};

export const priceSeperator = (price) => {
  const priceLength = price.length;
  if (priceLength < 3) return;
  if (priceLength > 3 && priceLength < 7) {
    return (
      price.slice(0, price.length - 3) +
      "," +
      price.slice(price.length - 3, price.length)
    );
  }
  if (priceLength > 6 && priceLength < 10) {
    return (
      price.slice(0, price.length - 6) +
      "," +
      price.slice(price.length - 6, price.length - 3) +
      "," +
      price.slice(price.length - 3, price.length)
    );
  }
};

export const convertDateToPersian = (date) => {
  const { jy, jm, jd } = jalali.toJalaali(date);
  const persianDate = `${convertToPersian(jy)}/${convertToPersian(
    jm
  )}/${convertToPersian(jd)}`;

  const persianTime = `${convertToPersian(date.getHours())}:${convertToPersian(
    date.getMinutes()
  )}:${convertToPersian(date.getSeconds())}`;

  return `${persianTime} , ${persianDate}`;
};

export const calcNextPageCollection = (position, items) => {
  const allProduct = items.length;
  const allProductView = allProduct * 275;
  const viewPosition = 275 * 4;
  const resultPosition = position - viewPosition;
  const maxMargin = viewPosition - allProductView;
  return { resultPosition, maxMargin };
};
