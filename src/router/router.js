import React, { Component } from "react";
// 路由切换过渡效果
import "./index.css";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import App from "@/views/app/App";
import Index from "@/views/Index/index";

export default class RouterView extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/app" exact component={App} />
          <Redirect to="/404" form="/test" />
        </Switch>
      </Router>
    );
  }
}