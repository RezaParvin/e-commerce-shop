import * as actions from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  currentUser: null,
  errorMessage: null,
};

const userAuth = (state, user) => {
  return updateObject(state, { currentUser: user, errorMessage: null });
};

const userAuthFailed = (state, error) => {
  return updateObject(state, { errorMessage: error });
};

const userSignOutSuccess = (state) => {
  return updateObject(state, { currentUser: null, errorMessage: null });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.USER_SIGN_IN_SUCCESS:
      return userAuth(state, action.payLoad);
    case actions.USER_SIGN_IN_FALIED:
    case actions.USER_SIGN_OUT_FAILED:
    case actions.USER_SIGN_UP_FALIED:
      return userAuthFailed(state, action.payLoad);
    case actions.USER_SIGN_OUT_SUCCESS:
      return userSignOutSuccess(state);
    default:
      return state;
  }
};

export default reducer;
