import React,{ Component } from "react";
import { Link } from "react-router-dom";
import "./me.scss";
// tabbar组件
import BottomTabs from "@/components/BottomTabs/bottomTabbar";
// 广告组件
import Advertising from "@/components/Advertising/advertising";

class Me extends Component {
  constructor(props){
    super(props);
    this.state = {
      weight: ""
    };
  }

  handlerInput = (e) => {
    console.log(e.target.value);
    this.setState({
      weight: e.target.value
    });
  }

  changePhoneNumber = () => {
    console.log("更换手机号码");
  }

  render() {
    let gender;
    if (this.props.gender) {
      gender = require("imgRoot/me/male.png");
    } else {
      gender = require("imgRoot/me/female.png");
    }
    return (
      <div className="me">
        <header className="header">
          <div className="header-content">
            <img src={require("imgRoot/common/avtar.png")} alt="" className="avtar"/>
            <div className="user-info">
              <div className="username">Daniel Wu <img src={gender} className="gender" alt=""/></div>
              <div className="user-msg">
                <div className="height">183cm</div>
                <div className="age">44岁</div>
              </div>
            </div>
            <Link className="edit-info" to="/info">修改资料</Link>
          </div>
          <div className="change-weight">
            <img src={require("imgRoot/me/left.png")} alt="" className="left"/>
            <input type="digit" className="weight-input" placeholder="请输入你的体重" onChange={this.handlerInput} value={this.state.weight}/>
            <div className="right">
              <img src={require("imgRoot/me/edit.png")} alt="" className="right"/>
            </div>
          </div>
        </header>
        <main className="main">
          <div className="cellphone">
            <div className="cellphone-left">手机号码</div>
            <div className="cellphone-number">136****6060</div>
            <div className="cellphone-right" onClick={this.changePhoneNumber}>更换手机</div>
          </div>
          <div className="score">
            <img src={require("imgRoot/me/icons1.png")} alt="" className="icons"/>
            <div className="text">我的积分: 100</div>
            <div className="toExchange">去兑换</div>
          </div>
          <div className="report">
          <img src={require("imgRoot/me/icons2.png")} alt="" className="icons"/>
            <div className="text">健康报表</div>
            <div className="toExchange"></div>
          </div>
        </main>
        <Advertising linkPath={"/"}/>
        <BottomTabs path={this.props.match.path} />
      </div>
    );
  }
}

export default Me;