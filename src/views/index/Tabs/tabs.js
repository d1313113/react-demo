import React, { Component } from "react";
import "./tabs.scss";
import { Tabs } from "antd-mobile";
import Listitem from "./Listitem";

class TabsFoodSport extends Component {
  constructor(props){
    super(props);
    this.state = {
      test: []
    };
  }
  render() {
    const tabsTitle = [
      { title: "饮食", sub: "1" },
      { title: "运动", sub: "2" }
    ];
    const foodDescription = [
      {
        title: "早餐",
        tips: "(早餐要吃好)",
        description: "以优质蛋白为主",
        totalCal: 2226,
        expand: true
      },
      {
        title: "午餐",
        tips: "(午餐要吃饱)",
        description: "肉类以白肉为主",
        totalCal: 2226,
        expand: false
      },
      {
        title: "加餐",
        tips: "(加餐要吃精)",
        description: "补充高蛋白食品",
        totalCal: 2226,
        expand: false
      },
      {
        title: "晚餐",
        tips: "(加餐要吃少)",
        description: "用粗粮代替主食",
        totalCal: 2226,
        expand: false
      }
    ];
    const sportDescription = [
      {
        title: "运动",
        tips: "",
        description: "无氧+有氧,身材fitfitfit~",
        totalCal: 2226,
        expand: true
      }
    ];

    return (
      <div className="tabs-box">
        <Tabs
          tabs={tabsTitle}
          initialPage={0}
          className="tabs-head"
          tabBarUnderlineStyle={{borderColor: "#f9940b"}}
        >
          <div className="tabs-body">
            <Listitem foodAndSportDescription={foodDescription} />
          </div>
          <div className="tabs-body">
            <Listitem foodAndSportDescription={sportDescription} />
          </div>
        </Tabs>
      </div>
    );
  }
}

export default TabsFoodSport;