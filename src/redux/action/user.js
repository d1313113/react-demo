import * as userType from "./constants/userType";
import { createAction } from "./index";
// import {Toast} from "antd-mobile";
import { getRegister } from "@/api/api";

export function getRegisterData(params) {
  return async dispatch => {
    try{
      dispatch(createAction(userType.GET_USER_REGISTER_START));
      const data = await getRegister()(params);
      console.log(data,"111111111111111");
      dispatch(createAction(userType.GET_USER_REGISTER_SUCCESS), data);
    }catch(err){
      dispatch(createAction(userType.GET_USER_REGISTER_ERROR));
      console.log(err);
    }
  };
}