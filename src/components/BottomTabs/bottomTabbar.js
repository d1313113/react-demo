import React from "react";
import {NavLink} from "react-router-dom";
import "./bottomTabbar.scss";

function BottomTabs() {
  // const requireContext = require.context("imgRoot/tarbar/", false, /\/icons\d+\.png$/);
  // const iconsImgs = requireContext.keys().map(requireContext);
  return (
    <div className="tarbar">
      <div className="bottom-tabbar">
        <NavLink className="tarbar-item" exact to="/">
          <div>首页</div>
        </NavLink>
        <NavLink className="tarbar-item" to="/photo">
          <div>晒一晒</div>
        </NavLink>
        <NavLink className="tarbar-item" to="/me">
          <div>我的</div>
        </NavLink>
      </div>
    </div>
  );
}
export default BottomTabs;