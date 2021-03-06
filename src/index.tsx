import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.less";
import "./styles/out/tailwind.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BackTop } from "antd";

ReactDOM.render(
  <React.StrictMode>
    <BackTop visibilityHeight={10} />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
