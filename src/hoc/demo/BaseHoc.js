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
        this.props.dispatch(getRegisterData({_p:"327a60d535a0e8cc71f5c81be0af3f623c071d77a97dd65d81e5e94f5aa498d4602b70bb2ce9d04bd372afb680534dd156b979a35402d6ca9f8cebb5c307545982a2b74b9c0bf93dba1bcadf3f7fd0233ed059e09802f788825bcee3e8699ac1"}));
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
