import React, { Component } from "react";
// import API from "@/api/api";
import "./index.scss";
// 头部组件
import {Header} from "./Header/header";
class Index extends Component {
  render() {
    return (
      <div className="Index">
        我是首页
        <Header title={"123"}/>
      </div>
    );
  }
}

export default Index;