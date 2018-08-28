import React from "react";
import "./header.scss";
export function Header (props) {
  return (
    <div className="head">
      这是头部组件{props.title}111
    </div>
  );
}