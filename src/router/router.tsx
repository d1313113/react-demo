import * as React from "react";
// 引入过渡效果
import "./index.css";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import App from "../views/App/App";
// 引入封装的懒加载组件
import MyLoadable from "../components/MyLoadable/MyLoadable";

const Me = MyLoadable({
  loader: () => import("../views/Me/Me"),
});

export default class RouterView extends React.Component{
  public render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={ App } exact />
          <Route path="/" component={ Me } exact />
          <Redirect to="/404" from="/test" />
        </Switch>
      </Router>
    );
  }
};