import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from "./reducers/index";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import { rootSaga } from "./saga/root-saga";
import createSagaMiddleware from "redux-saga";

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
