import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import persistReducer from "./reducers/index.js";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
  persistReducer,
  composeEnhancers(applyMiddleware(thunk))
);
let persistor = persistStore(store);

export { store, persistor };
