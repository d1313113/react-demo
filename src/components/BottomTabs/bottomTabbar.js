import React from "react";
import {Link} from "react-router-dom";
import "./bottomTabbar.scss";

function BottomTabs(props) {
  const requireContext = require.context("imgRoot/tarbar/", false, /\/icons\d+\.png$/);
  const iconsImgs = requireContext.keys().map(requireContext);
  console.log(props);
  // const matchPath;
  // if (props.path === "/") {

  // }
  return (
    <div className="tarbar">
      <div className="bottom-tabbar">
        <Link className="tarbar-item" to="/">
          {/* {
            props.path === "/" ?  (
              <React.Fragment>
                <img src={iconsImgs[1]} alt="" className="tarbar-icons" />
                <div className="tarbar-text active">首页</div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <img src={iconsImgs[0]} alt="" className="tarbar-icons" />
                <div className="tarbar-text">首页</div>
              </React.Fragment>
            )
          } */}
          {
            <React.Fragment>
              <img src={iconsImgs[props.path === "/"?1:0]} alt="" className="tarbar-icons" />
              <div className={props.path === "/"?"active":""}>首页</div>
            </React.Fragment>
          }
          {/* {
            props.path !== "/" && (
              <React.Fragment>
                <img src={iconsImgs[0]} alt="" className="tarbar-icons" />
                <div className="tarbar-text">首页</div>
              </React.Fragment>
            )
          } */}
          {/* <img src={iconsImgs[0]} alt="" className="tarbar-icons" />
          <div className="tarbar-text">首页</div> */}
        </Link>
        <Link className="tarbar-item" to="/me">
          {/* <img src={iconsImgs[2]} alt="" className="tarbar-icons" />
          <div className="tarbar-text">我的</div> */}
          {
            <React.Fragment>
              <img src={iconsImgs[props.path === "/me"?3:2]} alt="" className="tarbar-icons" />
              <div className={props.path === "/me"?"active":""}>我的</div>
            </React.Fragment>
          }
        </Link>
      </div>
    </div>
  );
}
export default BottomTabs;