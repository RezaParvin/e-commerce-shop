import * as actions from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  hidden: false,
};

const cartToggle = (state) => {
  return updateObject(state, { hidden: !state.hidden });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.CART_TOGGLE_DROPDOWN:
      return cartToggle(state);
    default:
      return state;
  }
};

export default reducer;
