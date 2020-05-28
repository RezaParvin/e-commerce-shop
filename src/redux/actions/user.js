import * as actions from "./actionTypes";

export const userSignInSuccess = (user) => {
  return {
    type: actions.USER_SIGN_IN_SUCCESS,
    payLoad: user,
  };
};

export const userSignInFailed = (error) => {
  return {
    type: actions.USER_SIGN_IN_FALIED,
    payLoad: error,
  };
};

export const userGoogleSignInStart = () => {
  return {
    type: actions.USER_GOOGLE_SIGN_IN_START,
  };
};

export const userEmailSignInStart = (email, password) => {
  return {
    type: actions.USER_EMAIL_SIGN_IN_START,
    payLoad: { email, password },
  };
};

export const checkUserAuthenticatedStart = () => {
  return {
    type: actions.CHECK_USER_AUTHENTICATED,
  };
};

export const userSignOutStart = () => {
  return {
    type: actions.USER_SIGN_OUT_START,
  };
};

export const userSignOutSuccess = () => {
  return {
    type: actions.USER_SIGN_OUT_SUCCESS,
  };
};

export const userSignOutFailed = (error) => {
  return {
    type: actions.USER_SIGN_OUT_FAILED,
    payLoad: error,
  };
};

export const userSignUpStart = (email, password, displayName) => {
  return {
    type: actions.USER_SIGN_UP_START,
    payLoad: { email, password, displayName },
  };
};

export const userSignUpFailed = (error) => {
  return {
    type: actions.USER_SIGN_UP_FALIED,
    payLoad: error,
  };
};

export const userSignUpSuccess = (user, displayName) => {
  return {
    type: actions.USER_SIGN_UP_SUCCESS,
    payLoad: { user, displayName },
  };
};
