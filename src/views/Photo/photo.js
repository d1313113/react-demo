import React, { Component } from "react";
import "./photo.scss";
// tabbar组件
import BottomTabs from "@/components/BottomTabs/bottomTabbar";

class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: ""
    };
  }

  render() {
    return (
      <div>
        <div>这是晒一晒页面</div>
        <BottomTabs />
      </div>
    );
  }
}

export default Photo;