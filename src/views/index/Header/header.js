import React from "react";
import "./header.scss";
export function Header (props) {
  return (
    <div className="head">
      <img src={props.imgSrc} alt="" className="avtar" />
      这是头部组件{props.title}
    </div>
  );
}