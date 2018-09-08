import { combineReducers, createStore, applyMiddleware } from "redux";
import reducerDemo from "./reducers/demo";
import logger from "redux-logger";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  reducerDemo
});

// 初始化store,并且注入
const store = createStore(rootReducer, {}, applyMiddleware(logger, thunk));

export default store;