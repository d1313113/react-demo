import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../rootReducer";
import promise from "redux-promise-middleware";
const configureStore = () => {
  const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(thunk, promise(), logger))
  );

  // 开发阶段添加热加载
  if (process.env.NODE_ENV !== "production") {
    if (module.hot) {
      module.hot.accept("../rootReducer", () => {
        store.replaceReducer(rootReducer);
      });
    }
  }

  return store;
};
export default configureStore;
