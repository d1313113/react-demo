// interface params {
//   state?: number,
//   action?: object
// }
const reducerDemo = (state = 0, action = {type:""}) => {
  switch (action.type) {
    case "TEST_REDUEX":
      return state + 1;
    default:
      return state;
  }
};

export default reducerDemo;