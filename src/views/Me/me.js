import React,{ Component } from "react";
import "./me.scss";
// tabbar组件
import BottomTabs from "@/components/BottomTabs/bottomTabbar";

class Me extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="me">
        这是我的页面
        <BottomTabs {...this.props.match} />
      </div>
    );
  }
}

export default Me;