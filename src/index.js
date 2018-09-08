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
// 引入热重置
import { AppContainer } from "react-hot-loader";
// 引入Provider
import { Provider } from "react-redux";
// 引入store
import store from "./redux/rootReducer";

// 使用fastclick
window.addEventListener("load", () => {
  FastClick.attach(document.body);
});

if (!window.Promise) {
  document.writeln(
    "<script src=" +
    "https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js" +
    ">" +
    "<" +
    "/" +
    "script>"
  );
}



ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <RouterViews />
      </Provider>
    </AppContainer>
  ,
  document.getElementById("root")
);
registerServiceWorker();

