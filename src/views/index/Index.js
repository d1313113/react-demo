import React, { Component } from "react";
// import { matchPath } from "react-router";
// import API from "@/api/api";
import "./index.scss";
// 头部组件
import {Header} from "./Header/header";
import avtar from "imgRoot/common/avtar.png";
// tabs组件
import TabsFoodSport from "./Tabs/tabs";
// tabbar组件
import BottomTabs from "@/components/BottomTabs/bottomTabbar";
// 引入connect
import {connect} from "react-redux";

class Index extends Component {
  constructor(props) {
    super(props);
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
      },
      foodAndSport: {
        tabs: [
          { title: "饮食", sub: 1 },
          { title: "运动", sub: 2 }
        ]
      }
    };
  }
  render() {
    console.log(this.props.counter);
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
        {/* <div>{this.props.counter}</div> */}
        <TabsFoodSport {...this.state.foodAndSport} />
        <BottomTabs path={this.props.match.path}/>
      </div>
    );
  }
}

// 获取传递过来的数据
const mapStateToProps = (state) => {
  return {
    counter: state
  };
};

// 连接redux
export default connect(mapStateToProps)(Index);