import React from "react";
import ReactDOM from "react-dom";
import "reset-css";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
// 引入fastClick
import FastClick from "fastclick";
// 引入flexible即可
import "amfe-flexible";
// 引入路由
import RouterViews from "@/router/router";
import { AppContainer } from "react-hot-loader";

window.addEventListener("load", () => {
  FastClick.attach(document.body);
});

ReactDOM.render(
  <AppContainer>
    <RouterViews />
  </AppContainer>
  ,
  document.getElementById("root")
);
registerServiceWorker();

