import * as constType from "./constants/historyWeightType";
import { createAction } from "./index";
import { getHistoryWeight } from "@/api/api";

export function getHistoryWeightDate (params) {
  return async dispatch => {
    try {
      dispatch(createAction(constType.GET_HISTORY_WEIGHT_START));
      const data = await getHistoryWeight(params);
      dispatch(createAction(constType.GET_HISTORY_WEIGHT_SUCCESS, data));
    } catch (error) {
      console.log(error);
      dispatch(createAction(constType.GET_HISTORY_WEIGHT_ERROR, {isHistory: false}));
    }
  };
}
