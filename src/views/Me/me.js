import React,{ Component } from "react";
import { Link } from "react-router-dom";
import "./me.scss";
// tabbar组件
import BottomTabs from "@/components/BottomTabs/bottomTabbar";
// 广告组件
import Advertising from "@/components/Advertising/advertising";
// 引入connect
import { connect } from "react-redux";
import { getRegisterData } from "@/redux/action/user";

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

  getUserInfo = () => {
    this.props.dispatch(getRegisterData({_p:"327a60d535a0e8cc71f5c81be0af3f623c071d77a97dd65d81e5e94f5aa498d4602b70bb2ce9d04bd372afb680534dd156b979a35402d6ca9f8cebb5c307545982a2b74b9c0bf93dba1bcadf3f7fd0233ed059e09802f788825bcee3e8699ac1"}));
  }

  componentDidMount() {
    console.log(this.props.userInfo);
    if (Object.keys(this.props.userInfo).length === 0) {
      this.getUserInfo();
    }
  }

  componentWillReceiveProps(nextProps) {
    const { userInfo } = nextProps.userInfo;
    console.log(userInfo);
    // if (Object.keys(userInfo)) {
    //   this.getUserInfo();
    // }
  }

  render() {
    const { userInfo } = this.props;
    let gender;
    if (userInfo.gender === 1) {
      gender = require("imgRoot/me/male.png");
    } else {
      gender = require("imgRoot/me/female.png");
    }
    console.log(userInfo);
    return (
      <div className="me">
        <header className="header">
          <div className="header-content">
            <img src={userInfo.headimgurl} alt="" className="avtar" onClick={this.getUserInfo}/>
            <div className="user-info">
              <div className="username">Daniel Wu <img src={gender} className="gender" alt=""/></div>
              <div className="user-msg">
                {
                  userInfo && (<div className="height">{userInfo.height}cm</div>)
                }
                {
                  userInfo && (<div className="age">{userInfo.age}岁</div>)
                }
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
            <div className="cellphone-number">{userInfo.cellPhone}</div>
            <div className="cellphone-right" onClick={this.changePhoneNumber}>更换手机</div>
          </div>
          <div className="score">
            <img src={require("imgRoot/me/icons1.png")} alt="" className="icons"/>
            <div className="text">我的积分: 100</div>
            <div className="toExchange">去兑换</div>
          </div>
          <div className="report">
          <img src={require("imgRoot/me/icons2.png")} alt="" className="icons"/>
            <div className="text">
              健康报表
            </div>
            <div className="toExchange"></div>
            <div className="unread">1</div>
          </div>
        </main>
        <Advertising linkPath={"/"}/>
        <BottomTabs/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.userReducers
  };
};

export default connect(mapStateToProps)(Me);