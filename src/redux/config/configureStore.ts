// 判断环境,切换不同的配置
import configureStoreDev from "./configureStore.dev";
import configureStoreProd from "./configureStore.prod";

const configure =
  process.env.NODE_ENV === "production"
    ? configureStoreProd
    : configureStoreDev;

export default configure;
