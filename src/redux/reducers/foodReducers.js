const getFood = (state = {}, action = {}) => {
  switch (action.type) {
    case "GET_DEFAULT_FOOD_SUCCESS":
      return action.payload;
    default:
      return state;
  }
};
export default getFood;