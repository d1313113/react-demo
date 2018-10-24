import * as weightManagementType from "./constants/weightManagementType";
import { createAction } from "./index";
// import {Toast} from "antd-mobile";
import { getManagementid } from "@/api/api";

export function getManagementData(params) {
  return async dispatch => {
    try{
      dispatch(createAction(weightManagementType.GET_MANAGEMENT_START));
      const data = await getManagementid(params);
      // console.log(data,"111111111111111");
      dispatch(createAction(weightManagementType.GET_MANAGEMENT_SUCCESS, data));
    }catch(err){
      // console.log(err);
      dispatch(createAction(weightManagementType.GET_MANAGEMENT_ERROR, {isManagement:false}));
    }
  };
}