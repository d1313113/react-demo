import { combineReducers } from "redux";
import reducerDemo from "./reducers/demo";
import userReducers from "./reducers/userReducers";
// import logger from "redux-logger";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  reducerDemo,
  userReducers
});

// 初始化store,并且注入
// const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(logger, thunk)));

export default rootReducer;