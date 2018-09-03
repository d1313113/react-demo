import React from "react";
import { Link } from "react-router-dom";
import "./advertising.scss";

function Advertising(props) {
  console.log(props);
  return (
    <div className="advertising">
      <Link to={props.linkPath}>
        <img src={require("imgRoot/common/adv.jpg")} alt="" className="adv-img"/>
      </Link>
    </div>
  );
}

export default Advertising;