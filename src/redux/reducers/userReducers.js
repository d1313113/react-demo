const getUserR = (state = {}, action = {}) => {
  switch (action.type) {
    case "GET_USER_REGISTER_SUCCESS":
      return state;
    default:
      return {};
  }
};

export default getUserR;