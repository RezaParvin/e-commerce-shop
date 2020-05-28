import { all, call, put, takeLatest } from "redux-saga/effects";
import * as actions from "../actions/actionTypes";
import {
  getShopDataSuccess,
  getShopDataFailed,
  getShopDataStart,
} from "../actions/index";

import {
  firestore,
  convertCollectionData,
} from "../../firebase/firebase.utils";

export function* getShopCollectionsSaga() {
  try {
    yield put(getShopDataStart());
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collections = yield call(convertCollectionData, snapshot);
    yield put(getShopDataSuccess(collections));
  } catch (error) {
    yield put(getShopDataFailed(error));
  }
}

export function* watchShopCollections() {
  yield takeLatest(actions.GET_SHOP_DATA_INITIAL, getShopCollectionsSaga);
}

export function* shopSagas() {
  yield all([call(watchShopCollections)]);
}
