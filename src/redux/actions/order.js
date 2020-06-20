import * as actions from "./actionTypes";

export const addUserOrderStart = () => {
  return {
    type: actions.ADD_USER_ORDER_START,
  };
};

export const addUserOrderSuccess = (order) => {
  return {
    type: actions.ADD_USER_ORDER_SUCCESS,
    payload: order,
  };
};

export const addUserOrderFailed = (error) => {
  return {
    type: actions.ADD_USER_ORDER_FAILED,
    payload: error,
  };
};

export const addUserOrderInitial = (order) => {
  return {
    type: actions.ADD_USER_ORDER_INITIAL,
    payload: order,
  };
};

export const restartIsSuccess = () => {
  return {
    type: actions.REASTART_IS_SUCCESS,
  };
};

export const getUserOrdersStart = () => {
  return {
    type: actions.GET_USER_ORDERS_START,
  };
};

export const getUserOrdersInitial = () => {
  return {
    type: actions.GET_USER_ORDERS_INITIAL,
  };
};
export const getUserOrdersSuccess = (orders) => {
  return {
    type: actions.GET_USER_ORDERS_SUCCESS,
    payload: orders,
  };
};
export const getUserOrdersFailed = (error) => {
  return {
    type: actions.GET_USER_ORDERS_FAILED,
    payload: error,
  };
};

export const clearCartAfterOrder = () => {
  return {
    type: actions.CLEAR_CART_AFTER_ORDER,
  };
};
