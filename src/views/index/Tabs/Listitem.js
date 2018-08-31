import React from "react";
import "./Listitem.scss";

function Listitem(props) {
  const requireContext = require.context("imgRoot/index/", false, /\/tabs\d+\.png$/);
  const listItemImgs = requireContext.keys().map(requireContext);
  // console.log(props);

  return (
    <React.Fragment>
      {
        props.foodAndSportDescription.map((item,index) => {
          return (
            <div className="list-item-box" key={item.title}>
              <div className="list-item">
                <img src={listItemImgs[index]} alt="" className="list-item-img" />
                <div className="title-box">
                  <div className="title">
                    {item.title}
                    <span className="tips">{item.tips}</span>
                  </div>
                  <div className="description">{item.description}</div>
                </div>
                <div className="cal">
                  {
                    /*
                    item.expand ?
                    (<React.Fragment>
                      <span className="num">{item.totalCal}</span>千卡
                    </React.Fragment>) :
                    (<img src={require("imgRoot/index/arrow-down.png")} alt="" className="arrow-down" />)
                    */
                  }
                </div>
              </div>
              <details className="haorooms" open={index === 0}>
                <summary>
                  <div className="total-cal">
                    <span className="num">{item.totalCal}</span>千卡
                  </div>
                  <div className="detail-box">
                    <div className="detail-item">
                      <div className="detail-left">
                        <div className="name">牛奶</div>
                        <div className="quantity">1袋</div>
                      </div>
                      <div className="detail-right">108千卡</div>
                    </div>
                    <div className="switch-item">
                      <div className="switch-left" style={{"borderRight":"1px solid #e5e5e5"}}>
                        <img src={listItemImgs[5]} alt=""/>
                        食物估量
                      </div>
                      <div className="switch-right">
                        <img src={listItemImgs[6]} alt=""/>
                        换一换
                      </div>
                    </div>
                  </div>
                </summary>
              </details>
            </div>
          );
        })
      }
    </React.Fragment>
  );
}

export default Listitem;