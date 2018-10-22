import React, { Component } from "react";
// 路由切换过渡效果
import "./index.css";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import App from "@/views/app/App";
import Index from "@/views/Index/index";
import Photo from "@/views/Photo/photo";
import Me from "@/views/Me/me";

export default class RouterView extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/me" exact component={Me} />
          <Route path="/photo" exact component={Photo} />
          <Route path="/app" exact component={App} />
          <Redirect to="/404" form="/test" />
        </Switch>
      </Router>
    );
  }
}