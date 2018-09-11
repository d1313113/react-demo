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
import {getRegisterData} from "@/redux/action/user";

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

  componentDidMount() {
    this.props.test("2c802606ae4adf771c42787028df96ce2397cef613494fb376d22162a1969b959a9e8ba6607249987d4e510ffecd2dd203da0d007ff4a3dc37c98a4987645c16397a71cd0cccaf1ac489bc825383cf0c0bbb9ea7352002bed2ddb54c61d113912b4c035ee23b248855209c9b9f3db98552a490939da92054c2a9bf94f8d2ede06a52742603d38feed5537ba2b6aaa53cb1d257fdb37ce2b929c51f1496133711137626bf39589e87dce1010b3c81933764026d24768594baf0e75d1be1841b05");
  }


  render() {
    console.log(this.props.counter);
    return (
      <div className="Index">
        <Header {...this.state.header}/>
        <div className="icons-box">
          <div className="icons">
            <div className="title" onClick={()=>{this.props.test({_p:"2c802606ae4adf771c42787028df96ce2397cef613494fb376d22162a1969b959a9e8ba6607249987d4e510ffecd2dd203da0d007ff4a3dc37c98a4987645c16397a71cd0cccaf1ac489bc825383cf0c0bbb9ea7352002bed2ddb54c61d113912b4c035ee23b248855209c9b9f3db98552a490939da92054c2a9bf94f8d2ede06a52742603d38feed5537ba2b6aaa53cb1d257fdb37ce2b929c51f1496133711137626bf39589e87dce1010b3c81933764026d24768594baf0e75d1be1841b05"});}}>目标管理</div>
            <div className="description">制定完美目标</div>
          </div>
          <div className="icons">
            <div className="title">健康报表</div>
            <div className="description">了解下自己吧</div>
          </div>
        </div>
        {/* <div>{this.props.counter}</div> */}
        <TabsFoodSport {...this.state.foodAndSport} />
        <BottomTabs/>
      </div>
    );
  }
}

// 获取传递过来的数据
const mapStateToProps = (state) => {
  return {
    counter: state.userReducers
  };
};

// 获取dispatch
const mapDispatchToProps = (dispatch) => {
  return {
    test: (p) => {dispatch(getRegisterData({_p:p}));}
  };
};

// 连接redux
export default connect(mapStateToProps, mapDispatchToProps)(Index);