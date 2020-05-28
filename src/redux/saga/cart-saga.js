import { all, call, put, takeLatest } from "redux-saga/effects";
import * as actions from "../actions/actionTypes";
import { signOutClearCart } from "../actions/index";

export function* cartClearSaga() {
  yield put(signOutClearCart());
}

export function* watchCartClear() {
  yield takeLatest(actions.USER_SIGN_OUT_SUCCESS, cartClearSaga);
}

export function* cartSaga() {
  yield all([call(watchCartClear)]);
}
