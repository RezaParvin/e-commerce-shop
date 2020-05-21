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
