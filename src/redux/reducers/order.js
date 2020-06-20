import * as actions from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialOrderState = {
  orders: [],
  isLoading: false,
  error: null,
  isSuccess: false,
};

const processUserOrderStart = (state) => {
  return updateObject(state, { isLoading: true });
};

const addUserOrderSuccess = (state, order) => {
  return updateObject(state, {
    orders: [...state.orders, order],
    isSuccess: true,
    isLoading: false,
  });
};
const processUserOrderFailed = (state, error) => {
  return updateObject(state, { error: error, isLoading: false });
};

const restartIsSuccess = (state) => {
  return updateObject(state, { isSuccess: false });
};

const getUserOrdersSuccess = (state, orders) => {
  return updateObject(state, { orders: orders, isLoading: false });
};

const orderReducer = (state = initialOrderState, action) => {
  switch (action.type) {
    case actions.ADD_USER_ORDER_START:
    case actions.GET_USER_ORDERS_START:
      return processUserOrderStart(state);
    case actions.ADD_USER_ORDER_SUCCESS:
      return addUserOrderSuccess(state, action.payload);
    case actions.GET_USER_ORDERS_SUCCESS:
      return getUserOrdersSuccess(state, action.payload);
    case actions.ADD_USER_ORDER_FAILED:
    case actions.GET_USER_ORDERS_FAILED:
      return processUserOrderFailed(state, action.payload);
    case actions.REASTART_IS_SUCCESS:
      return restartIsSuccess(state);
    default:
      return state;
  }
};

export default orderReducer;
