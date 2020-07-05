import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import userReducer from "./user";
import modalReducer from "./modal";
import eventReducer from "./event";
import dropdownReducer from "./dropdown";
import eventInfoReducer from "./eventInfo";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["dropDown", "modal"],
};

const rootReducer = combineReducers({
  user: userReducer,
  modal: modalReducer,
  event: eventReducer,
  dropDown: dropdownReducer,
  eventInfo: eventInfoReducer,
});

export default persistReducer(persistConfig, rootReducer);
