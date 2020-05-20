import { applyMiddleware, createStore, compose } from "redux";
import { rootReducer } from "./reducers/index";
import logger from 'redux-logger';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [logger];

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export { store };
