import React from "react";
import BaseHoc from "../BaseHoc";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const BaseConnet = (props) => {
  return <BaseHoc {...props}/>;
};

const mapStateToProps = (state) => {
  return {
    userInfo : state.userReducers
  };
};

export default connect(mapStateToProps)(BaseConnet);