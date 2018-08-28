import React from "react";
import "./header.scss";
export function Header (props) {
  return (
    <div>
      这是头部组件{props.title}
    </div>
  );
}