import * as actions from "../actions/actionTypes";

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
  return {
    type: actions.GET_SHOP_DATA_INITIAL,
  };
};
