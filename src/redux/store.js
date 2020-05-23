import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from "./reducers/index";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [logger];

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export const persistor = persistStore(store);
