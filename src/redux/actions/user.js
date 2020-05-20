import * as actions from "./actionTypes";

export const userAuth = (user) => {
  return {
    type: actions.USER_AUTHENTICATED,
    user: user,
  };
};
