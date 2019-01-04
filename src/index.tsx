import * as React from "react";
import * as ReactDOM from "react-dom";
// import App from "./views/App/App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
// 引入flexible适配移动端
import "amfe-flexible";
// 引入fastClick
import * as FastClick from "fastclick";
// 引入路由
import RouterView from "./router/router";
import "reset-css";
// import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";
import store from "./redux/store";


if ("addEventListener" in document) {
  document.addEventListener(
    "DOMContentLoaded",
    () => {
      (FastClick as any).attach(document.body);
    },
    false,
  );
}

ReactDOM.render(
  <Provider store={ store }>
    <RouterView />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
