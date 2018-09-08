import { combineReducers, createStore, applyMiddleware } from "redux";
import reducerDemo from "./reducers/demo";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  reducerDemo
});

// 初始化store,并且注入
const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;