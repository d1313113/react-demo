// 判断环境,切换不同的配置
if (process.env.NODE_ENV === "production") {
  // module.exports = require("./configureStore.prod");
  module.exports = require("./configureStore.prod");
} else {
  module.exports = require("./configureStore.dev");
}
