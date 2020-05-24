import { SHOP_DATA } from "../../shared/shop-data";

const initialState = {
  collections: SHOP_DATA,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
