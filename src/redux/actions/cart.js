import * as actions from "./actionTypes";

export const cartToggleDropDown = () => {
  return {
    type: actions.CART_TOGGLE_DROPDOWN,
  };
};

export const addItemToCart = (item) => {
  return {
    type: actions.ADD_ITEM_TO_CART,
    item: item,
  };
};

export const removeItemToCart = (item) => {
  return {
    type: actions.REMOVE_ITEM_TO_CART,
    item: item,
  };
};

export const clearItemOfCart = (item) => {
  return {
    type: actions.CLEAR_ITEM_OF_CART,
    item: item,
  };
};

export const signOutClearCart = () => {
  return {
    type: actions.SIGN_OUT_CLEAR_CART,
  };
};
