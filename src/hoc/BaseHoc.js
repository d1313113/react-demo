import React,{ Component } from "react";
import { connect } from "react-redux";
import { getRegisterData } from "@/redux/action/user";
import { getManagementData } from "@/redux/action/weightManagement";
import store from "@/redux/store";

// 获取组件的名称
const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent || "Component";
};

const Container = mapStateToProps => {
  return function (WrappedComponent) {
    class BaseHOC extends Component {
      constructor(props) {
        super(props);
        this.state = {
          value: "测试高级组件使用的"
        };
      }

      // 给高阶组件增加显示名称
      static displayName = `InputHOC(${getDisplayName(WrappedComponent)})`;

      async componentDidMount() {
        console.log(this.props.location);
        // console.log(this.state);
        // console.log(this.props);
        // if (Object.keys(this.props.userInfo).length === 0) {
        if (Object.keys(store.getState().userReducers).length === 0) {
          const res1 = await this.getUserInfo();
          // console.log(res1);
          // 获取用户数据成功后获取目标管理
          if (res1) {
            const res2 = await this.getManagementid();
            console.log(res2);
          }
        }
      }

      componentWillReceiveProps() {
        // console.log(nextProps);
        // const { userInfo } = nextProps;
        // console.log(userInfo);
        // if (userInfo.isRegister) {
        //   this.getManagementid();
        // }
      }

      //获取用户信息
      getUserInfo = () => (
        this.props.dispatch(getRegisterData({_p:"327a60d535a0e8cc71f5c81be0af3f623c071d77a97dd65d81e5e94f5aa498d4602b70bb2ce9d04bd372afb680534dd156b979a35402d6ca9f8cebb5c307545982a2b74b9c0bf93dba1bcadf3f7fd0233ed059e09802f788825bcee3e8699ac1"}))
      );

      // 获取目标管理
      getManagementid = () => {
        const { userInfo } = this.props;
        console.log("获取目标管理",this.props);
        this.props.dispatch(getManagementData({_p:"327a60d535a0e8cc71f5c81be0af3f623c071d77a97dd65d81e5e94f5aa498d4602b70bb2ce9d04bd372afb680534dd156b979a35402d6ca9f8cebb5c307545982a2b74b9c0bf93dba1bcadf3f7fd0233ed059e09802f788825bcee3e8699ac1",unionid:userInfo.unionid}));
      }

      render() {
        const passProps = {
          value: this.state.value
        };
        return <WrappedComponent {...passProps} {...this.props}/>;
      }
    }

    return connect(mapStateToProps)(BaseHOC);
  };
};

export default Container;
