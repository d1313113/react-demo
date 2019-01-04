import { isHistoryWeight } from "../status/historyWeightStatus";

const historyWeight = (state = {}, action = {}) => {
  switch (action.type) {
    case "GET_HISTORY_WEIGHT_SUCCESS":
      return isHistoryWeight(action.payload);
    case "GET_HISTORY_WEIGHT_ERROR":
      return {isWeight: false};
    default:
      return state;
  }
};

export default historyWeight;