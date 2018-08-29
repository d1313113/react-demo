import React, { Component } from "react";
// import API from "@/api/api";
import "./index.scss";
// 头部组件
import {Header} from "./Header/header";
import avtar from "imgRoot/index/avtar.png";

class Index extends Component {
  constructor() {
    super();
    this.state = {
      header: {
        imgSrc: avtar,
        currentWeight: 123,
        compare: 2,
        bodyMsg: [
          {name: "目标周期", val: "14天"},
          {name: "目标体重", val: "110斤"},
          {name: "BMI", val: "23.9"},
          {name: "体型", val: "正常"}
        ]
      }
    };
  }
  render() {
    return (
      <div className="Index">
        <Header {...this.state.header}/>
        <div className="icons-box">
          <div className="icons">
            <div className="title">目标管理</div>
            <div className="description">制定完美目标</div>
          </div>
          <div className="icons">
            <div className="title">健康报表</div>
            <div className="description">了解下自己吧</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;