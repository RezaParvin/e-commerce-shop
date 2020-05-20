import * as actions from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  currentUser: null,
};

const userAuth = (state, user) => {
  return updateObject(state, { currentUser: user });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.USER_AUTHENTICATED:
      return userAuth(state, action.user);
    default:
      return state;
  }
};

export default reducer;
