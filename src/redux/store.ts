import rootReducer from "./rootReducer";
import configureStore from "./config/configureStore";

const store = configureStore(rootReducer);

export default store;