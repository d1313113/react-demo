import { combineReducers } from "redux";
import userReducers from "./reducers/userReducers";
import foodReducers from "./reducers/foodReducers";
import weightManagementReducers from "./reducers/weightManagementReducers";
import historyWeightReducer from "./reducers/historyWeightReducer";
// import logger from "redux-logger";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  userReducers,
  foodReducers,
  weightManagementReducers,
  historyWeightReducer
});

// 初始化store,并且注入
// const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(logger, thunk)));

export default rootReducer;