import { createStore, combineReducers, compose } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth/reducer";
import musicReducer from "./music/reducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

// const persistConfig = {
//   key: "root",
//   storage,
// };

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({ auth: authReducer, music: musicReducer });

// const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(reducers, composeEnhancers());
