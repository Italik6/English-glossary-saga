import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import reducers from "./reducers";

const createStoreWithMiddleware = compose(
  // Add redux devtools for chrome browser
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
