import { createSelector } from "reselect";

const selectOrder = (state) => state.order;
const selectUser = (state) => state.user;
const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (items) => items.cartItems
);

export const selectCartItemsTotal = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (sumPrice, item) => sumPrice + item.price * item.quantity,
      0
    )
);

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);

export const selectUserOrders = createSelector(
  [selectOrder],
  (order) => order.orders
);

export const selectIsLoading = createSelector(
  [selectOrder],
  (order) => order.isLoading
);

export const selectErrorAddOrder = createSelector(
  [selectOrder],
  (order) => order.error
);

export const selectIsSussess = createSelector(
  [selectOrder],
  (order) => order.isSuccess
);

export const selectIsLoadOrders = createSelector(
  [selectOrder],
  (order) => order.orders.length > 0
);
