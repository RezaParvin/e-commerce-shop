import * as actions from "../actions/actionTypes";
import {
  firestore,
  convertCollectionData,
} from "../../firebase/firebase.utils";

export const getShopDataStart = () => {
  return {
    type: actions.GET_SHOP_DATA_START,
  };
};

export const getShopDataSuccess = (collections) => {
  return {
    type: actions.GET_SHOP_DATA_SUCCESS,
    collections: collections,
  };
};

export const getShopDataFailed = (error) => {
  return {
    type: actions.GET_SHOP_DATA_FAILED,
    error: error,
  };
};

export const getShopDataStartAsync = () => {
  return (dispatch) => {
    dispatch(getShopDataStart());
    const collectionRef = firestore.collection("collections");
    collectionRef
      .get()
      .then((snapshot) => {
        const collections = convertCollectionData(snapshot);
        dispatch(getShopDataSuccess(collections));
      })
      .catch((error) => {
        dispatch(getShopDataFailed(error));
      });
  };
};
