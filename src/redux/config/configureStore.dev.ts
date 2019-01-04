import { createStore, applyMiddleware } from "redux";
// 输出日志中间件
import logger from "redux-logger";
// 处理异步中间件
import thunk from "redux-thunk";
// redux开发工具
import { composeWithDevTools } from "redux-devtools-extension";
// 处理promise中间件
import promise from "redux-promise-middleware";
import rootReducer from "../rootReducer";

const configureStore = () => {
  const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(thunk, promise(), logger))
  );

  // 开发阶段添加热加载
  if (process.env.NODE_ENV !== "production") {
    if ((module as any).hot) {
      (module as any).hot.accept("../rootReducer", () => {
        store.replaceReducer(rootReducer);
      });
    }
  }

  return store;
}

export default configureStore;
