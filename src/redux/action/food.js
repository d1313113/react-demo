import * as foodType from "./constants/foodType";
import { createAction } from "./index";
import { getDefaultFood } from "@/api/api";

export function getFood (parmas) {
  return async dispatch => {
    try {
      dispatch(createAction(foodType.GET_DEFAULT_FOOD_START,{isLoading:true}))
      let {unionid} = parmas
      if (parmas.isRegister) {
        data = await getDefaultFood({unionid})
      } else {
        data = await getDefaultFood({unionid})
      }
      dispatch(createAction(userType.GET_DEFAULT_FOOD_SUCCESS, data));
    } catch (error) {
      dispatch(createAction(userType.GET_DEFAULT_FOOD_ERROR, data));
    }
  }
}