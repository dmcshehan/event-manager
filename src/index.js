import React from "react";
import ReactDOM from "react-dom";
import "./scss/index.scss";
import App from "./components/App/App";

import { Provider } from "react-redux";
import store from "./store/index.js";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
