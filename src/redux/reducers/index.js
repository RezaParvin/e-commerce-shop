import { combineReducers } from "redux";
import userReducer from "./user";
import cartReducer from "./cart";
import directoryReducer from "./directory";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import shopReducer from "./shop";
import orderReducer from "../reducers/order";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
  order: orderReducer,
});

export default persistReducer(persistConfig, rootReducer);
