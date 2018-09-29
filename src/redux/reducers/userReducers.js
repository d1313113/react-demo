import { isUserRegister } from "../status/userStatus";
const getUserR = (state = {}, action = {}) => {
  switch (action.type) {
    case "GET_USER_REGISTER_SUCCESS":
      return isUserRegister(action.payload);
    case "GET_USER_CREDITS_SUCCESS":
      return action.payload;
    default:
      return state;
  }
};
export default getUserR;