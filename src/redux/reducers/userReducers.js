const getUserR = (state = {}, action = {}) => {
  switch (action.type) {
    case "GET_USER_REGISTER_SUCCESS":
      return action.payload;
    default:
      return state;
  }
};

export default getUserR;