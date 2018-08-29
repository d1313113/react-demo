import React from "react";
import "./tabs.scss";
import { Tabs } from "antd-mobile";

export default function TabsFoodSport() {
  const tabs = [
    { title: "First Tab" },
    { title: "Second Tab" }
  ];
  return (
    <div>
      <Tabs
        tabs={tabs}
        initialPage={1}
      >
      </Tabs>
    </div>
  );
}