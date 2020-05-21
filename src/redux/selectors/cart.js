import { createSelector } from "reselect";

//create input selector
const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (items) => items.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((sumQauntity, item) => sumQauntity + item.quantity, 0)
);
