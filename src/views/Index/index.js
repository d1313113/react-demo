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
// import {connect} from "react-redux";
// import {getRegisterData} from "@/redux/action/user";
// import {getManagementData} from "@/redux/action/weightManagement";
import BaseHOC from "@/hoc/BaseHoc";

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
        ],
        getMsg: false
      },
      foodAndSport: {
        tabs: [
          { title: "饮食", sub: 1 },
          { title: "运动", sub: 2 }
        ]
      }
    };
    this.updateUserInfoToState = this.updateUserInfoToState.bind(this);
  }

  // 更新用户数据到state中
  updateUserInfoToState() {
    this.setState((state,props) => ({
      header: {
        ...state.header,
        imgSrc: props.userInfo.headimgurl,
        currentWeight: 110,
        getMsg: true
      }
    }));
  }

  componentDidMount() {
    // const {dispatch} = this.props;
    // dispatch(getRegisterData({_p:"327a60d535a0e8cc71f5c81be0af3f623c071d77a97dd65d81e5e94f5aa498d4602b70bb2ce9d04bd372afb680534dd156b979a35402d6ca9f8cebb5c307545982a2b74b9c0bf93dba1bcadf3f7fd0233ed059e09802f788825bcee3e8699ac1"}));
    const { userInfo } = this.props;
    // if (!userInfo.length) {

    // }
    console.log(userInfo);
    // console.log(userInfo);
    if (!userInfo.length && !this.state.header.getMsg) {
      this.updateUserInfoToState();
      console.log(this);
    }
  }


  componentWillReceiveProps(nextProps) {
    // const {dispatch} = this.props;
    const userInfo = nextProps.userInfo;

    if (!nextProps.userInfo.length) {
      console.log("已经注册了");
      // 获取目标管理数据
      // dispatch(getManagementData({"unionid": nextProps.userInfo.unionid}));
      // 更新用户数据打state中
      // this.updateUserInfoToState();
      this.setState(prevState => ({
        header: {
          ...prevState.header,
          imgSrc: userInfo.headimgurl,
          currentWeight: 110,
          getMsg: true
        }
      }));
    } else {
      console.log("未注册");
      // this.getUserInfo();
    }
  }

  render() {
    // console.log(this.props.userInfo);
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
        <BottomTabs/>
      </div>
    );
  }
}

// 获取传递过来的数据
const mapStateToProps = (state) => {
  return {
    userInfo: state.userReducers,
    managementInfo: state.weightManagementReducers
  };
};

// 获取dispatch
// const mapDispatchToProps = (dispatch) => {
//   return {
//     test: (params) => {dispatch(getRegisterData(params));}
//   };
// };

// 连接redux
export default BaseHOC(mapStateToProps)(Index);