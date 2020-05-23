import * as actions from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  hidden: false,
  cartItems: [],
};

const cartToggle = (state) => {
  return updateObject(state, { hidden: !state.hidden });
};

const addItemToCart = (state, item) => {
  //check exists item in cartItems

  const itemFind = state.cartItems.find((cartItem) => cartItem.id === item.id);
  console.log(itemFind);
  if (itemFind) {
    const newItems = state.cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    return updateObject(state, { cartItems: newItems });
  } else {
    return updateObject(state, {
      cartItems: [...state.cartItems, { ...item, quantity: 1 }],
    });
  }
};

const removeItemToCart = (state, item) => {
  const itemFind = state.cartItems.find((cartItem) => cartItem.id === item.id);
  if (itemFind.quantity === 1) {
    return updateObject(state, {
      cartItems: state.cartItems.filter((cartItem) => item.id !== cartItem.id),
    });
  } else {
    const newCartItems = state.cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
    return updateObject(state, { cartItems: newCartItems });
  }
};

const clearItemOfCart = (state, item) => {
  return updateObject(state, {
    cartItems: state.cartItems.filter((cartItem) => cartItem.id !== item.id),
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.CART_TOGGLE_DROPDOWN:
      return cartToggle(state);
    case actions.ADD_ITEM_TO_CART:
      return addItemToCart(state, action.item);
    case actions.REMOVE_ITEM_TO_CART:
      return removeItemToCart(state, action.item);
    case actions.CLEAR_ITEM_OF_CART:
      return clearItemOfCart(state, action.item);
    default:
      return state;
  }
};

export default reducer;
