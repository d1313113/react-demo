const getFood = (state = {}, action = {}) => {
  switch (action.type) {
    case "GET_MANAGEMENT_SUCCESS":
      return action.payload;
    default:
      return state;
  }
};
export default getFood;