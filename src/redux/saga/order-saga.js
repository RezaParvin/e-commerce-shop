import { takeLatest, call, put, all, select } from "redux-saga/effects";
import * as actions from "../actions/actionTypes";
import { addUserOrder, getUserOrders } from "../../firebase/firebase.utils";
import {
  addUserOrderSuccess,
  addUserOrderFailed,
  addUserOrderStart,
  getUserOrdersSuccess,
  getUserOrdersFailed,
  getUserOrdersStart,
} from "../actions/order";
import { selectCurrentUser } from "../selectors/user";

export function* addUserOrderSaga({ payload }) {
  yield put(addUserOrderStart());
  try {
    yield call(addUserOrder, payload);
    yield put(addUserOrderSuccess(payload));
  } catch (error) {
    console.log(error);
    yield put(addUserOrderFailed(error));
  }
}

export function* onAddUserOrder() {
  yield takeLatest(actions.ADD_USER_ORDER_INITIAL, addUserOrderSaga);
}

export function* getUserOrdersInitialSaga() {
  yield put(getUserOrdersStart());
  try {
    const user = yield select(selectCurrentUser);
    const userOrders = yield call(getUserOrders, user.id);
    yield put(getUserOrdersSuccess(userOrders));
  } catch (error) {
    console.log(error);
    yield put(getUserOrdersFailed(error));
  }
}

export function* onGetUserOrders() {
  yield takeLatest(actions.GET_USER_ORDERS_INITIAL, getUserOrdersInitialSaga);
}

export function* orderSagas() {
  yield all([call(onAddUserOrder), call(onGetUserOrders)]);
}
