import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import rootReducer from "../rootReducer";

const configureStore = () => {
  const store = createStore(rootReducer, {}, applyMiddleware(thunk, promise()));
  return store;
};
export default configureStore;
