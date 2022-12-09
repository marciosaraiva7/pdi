import { createStore, combineReducers, compose } from "redux";

import authReducer from "./auth/reducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({ auth: authReducer });

export const store = createStore(reducers, composeEnhancers());
