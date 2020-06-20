import { call, all, put, takeLatest } from "redux-saga/effects";
import * as actions from "../actions/actionTypes";
import {
  googleProvider,
  auth,
  createUserProfileDocument,
  getCurrentUser,
} from "../../firebase/firebase.utils";
import {
  userSignInSuccess,
  userSignInFailed,
  userSignOutSuccess,
  userSignOutFailed,
  userSignUpFailed,
  userSignUpSuccess,
  signOutClearCart,
} from "../actions/index";

export function* proccessUserSignIn(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );

    const snapshot = yield userRef.get();
    yield put(userSignInSuccess({ id: snapshot.id, ...snapshot.data() }));
  } catch (error) {
    yield put(userSignInFailed(error));
  }
}

export function* userEmailSignInSaga({ payLoad: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield call(proccessUserSignIn, user);
  } catch (error) {
    yield put(userSignInFailed(error));
  }
}

export function* watchUserEmailSignIn() {
  yield takeLatest(actions.USER_EMAIL_SIGN_IN_START, userEmailSignInSaga);
}

export function* userGoogleSignInSaga() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield call(proccessUserSignIn, user);
  } catch (error) {
    put(userSignInFailed(error));
  }
}

export function* watchUserGoogleSignIn() {
  yield takeLatest(actions.USER_GOOGLE_SIGN_IN_START, userGoogleSignInSaga);
}

export function* checkUserAuthenticatedSaga() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield proccessUserSignIn(userAuth);
  } catch (error) {
    console.log(error);
  }
}

export function* watchCheckUserAuthenticated() {
  yield takeLatest(
    actions.CHECK_USER_AUTHENTICATED,
    checkUserAuthenticatedSaga
  );
}

export function* userSignOutSaga() {
  try {
    yield auth.signOut();
    yield put(userSignOutSuccess());
    yield put(signOutClearCart());
  } catch (error) {
    yield put(userSignOutFailed(error));
  }
}

export function* watchUserSignOut() {
  yield takeLatest(actions.USER_SIGN_OUT_START, userSignOutSaga);
}

export function* UserSignInAfterSignUpSaga({ payLoad: { user, displayName } }) {
  console.log(displayName);

  try {
    yield call(proccessUserSignIn, user, { displayName });
  } catch (error) {
    yield put(userSignUpFailed(error));
  }
}

export function* watchUserSignInAfterSignUp() {
  yield takeLatest(actions.USER_SIGN_UP_SUCCESS, UserSignInAfterSignUpSaga);
}

export function* userSignUpSaga({ payLoad: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(userSignUpSuccess(user, displayName));
  } catch (error) {
    yield put(userSignUpFailed(error));
  }
}

export function* watchUserSignUpStart() {
  yield takeLatest(actions.USER_SIGN_UP_START, userSignUpSaga);
}

export function* userSagas() {
  yield all([
    call(watchUserGoogleSignIn),
    call(watchUserEmailSignIn),
    call(watchCheckUserAuthenticated),
    call(watchUserSignOut),
    call(watchUserSignUpStart),
    call(watchUserSignInAfterSignUp),
  ]);
}
