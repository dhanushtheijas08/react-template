import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import ReactComponent from "./redux old/ReactComponent";
import store from "./redux old/store";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactComponent />
    </Provider>
  </React.StrictMode>
);
