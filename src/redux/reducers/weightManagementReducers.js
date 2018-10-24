import { isManagement } from "../status/weightManagementStatus";
const getFood = (state = {}, action = {}) => {
  switch (action.type) {
    case "GET_MANAGEMENT_SUCCESS":
      return isManagement(action.payload);
    case "GET_MANAGEMENT_ERROR":
      return {isManagement:false};
    default:
      return state;
  }
};
export default getFood;