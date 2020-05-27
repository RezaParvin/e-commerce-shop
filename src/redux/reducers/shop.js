import * as actions from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  collections: null,
  isFetching: false,
  errorMessage: undefined,
};

const getShopDataStart = (state) => {
  return updateObject(state, { isFetching: true });
};

const getShopDataSuccess = (state, collections) => {
  return updateObject(state, { collections: collections, isFetching: false });
};

const getShopDataFailed = (state, error) => {
  return updateObject(state, { errorMessage: error });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_SHOP_DATA_START:
      return getShopDataStart(state);
    case actions.GET_SHOP_DATA_SUCCESS:
      return getShopDataSuccess(state, action.collections);
    case actions.GET_SHOP_DATA_FAILED:
      return getShopDataFailed(state, action.error);
    default:
      return state;
  }
};

export default reducer;
