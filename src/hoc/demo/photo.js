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
    return (
      <div>
        <div>这是晒一晒页面</div>
        <div>{this.props.value}</div>
        <div>昵称:{this.props.name}</div>
        <BottomTabs />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    name: state.userReducers.name
  };
};
export default BaseHOC(mapStateToProps)(Photo);