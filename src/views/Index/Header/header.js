import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

export function Header (props) {
  return (
    <div className="head">
      <img src={props.imgSrc} alt="" className="avtar" />
      <div className="current-weight">
        {props.currentWeight}
        <span className="samll">斤</span>
      </div>
      {
        props.compare ?
          ( <div className="compare">比上一次+{props.compare}斤</div> ) :
          ( <Link className="compare" path="/info">请完善你的资料</Link> )
      }
      <div className="body-msg">
        {
          Array.isArray(props.bodyMsg)  && props.bodyMsg.map(item =>
            (
              <div className="block-area" key={item.name}>
                <div className="top">{item.val}</div>
                <div className="bottom">{item.name}</div>
              </div>
            )
          )
        }
      </div>
    </div>
  );
}