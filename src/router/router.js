import React, { Component } from 'react';
// 路由切换过渡效果
import './index.css'
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
import App from '@/views/app/App'

export default class RouterView extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={App} />
          <Redirect to="/404" from="/test" />
        </div>
      </Router>
    );
  }
}