import React, { Component } from "react";
import "./photo.scss";
// tabbar组件
import BottomTabs from "@/components/BottomTabs/bottomTabbar";
import BaseHOC from "@/hoc/BaseHoc";
// import BaseConnect from "@/hoc/BaseConnect";

class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: ""
    };
  }

  render() {
    console.log(this.props.userInfo);
    const {userInfo} = this.props;
    return (
      <div>
        <div>这是晒一晒页面</div>
        <div>{this.props.value}</div>
        <div>昵称:{userInfo.name}</div>
        <BottomTabs />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userInfo: state.userReducers
  };
};

export default BaseHOC(mapStateToProps)(Photo);