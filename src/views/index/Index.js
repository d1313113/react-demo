import React, { Component } from "react";
// import API from "@/api/api";
import "./index.scss";
// 头部组件
import {Header} from "./Header/header";
import avtar from "imgRoot/index/avtar.png";

class Index extends Component {
  render() {
    return (
      <div className="Index">
        <Header title={"123"} imgSrc={avtar} />
      </div>
    );
  }
}

export default Index;