import { call, all } from "redux-saga/effects";
import { shopSagas } from "./shop-saga";
import { userSagas } from "./user-saga";
import { orderSagas } from "./order-saga";

export function* rootSaga() {
  yield all([call(shopSagas), call(userSagas), call(orderSagas)]);
}
