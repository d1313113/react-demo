import React, { Component } from "react";
import { connect } from "react-redux";
import { getRegisterData } from "@/redux/action/user";

// 获取组件的名称
const getDisplayName = WrappedComponent => {
  return WrappedComponent.displayName || WrappedComponent || "Component";
};

// const mapStateToProps = (state) => {
//   return {
//     userInfo : state.userReducers
//   };
// };

const Container = WrappedComponent => {
  // const BaseHOCW = (props1) => {
  //   console.log(props1);
    class BaseHOC extends Component {
      constructor(props) {
        super(props);
        this.state = {
          value: "测试高级组件使用的"
        };
      }

      // 给高阶组件增加显示名称
      static displayName = `InputHOC(${getDisplayName(WrappedComponent)})`;

      componentDidMount() {
        console.log(this.state);
        console.log(this.props);
        if (Object.keys(this.props.userInfo).length === 0) {
          this.getUserInfo();
        }
      }

      componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        // const { userInfo } = nextProps.userInfo;
        // console.log(userInfo);
        // if (Object.keys(userInfo)) {
        //   this.getUserInfo();
        // }
      }

      //获取用户信息
      getUserInfo = () => {
        this.props.dispatch(getRegisterData({_p:"2c802606ae4adf771c42787028df96ce2397cef613494fb376d22162a1969b959a9e8ba6607249987d4e510ffecd2dd203da0d007ff4a3dc37c98a4987645c16397a71cd0cccaf1ac489bc825383cf0c0bbb9ea7352002bed2ddb54c61d113912b4c035ee23b248855209c9b9f3db98552a490939da92054c2a9bf94f8d2ede06a52742603d38feed5537ba2b6aaa53cb1d257fdb37ce2b929c51f1496133711137626bf39589e87dce1010b3c81933764026d24768594baf0e75d1be1841b05"}));
      }

      render() {
        const passProps = {
          value: this.state.value
        };
        return <WrappedComponent {...passProps} userInfo={this.props.userInfo}/>;
      }
    }

    const mapStateToProps = (state) => {
      return {
        userInfo: state.userReducers
      };
    };

    return connect(mapStateToProps)(BaseHOC);
  };
  // };

  // return connect(mapStateToProps)(BaseHOC);

export default Container;
