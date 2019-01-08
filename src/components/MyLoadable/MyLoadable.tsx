import * as Loadable from "react-loadable";
import Loading from "../Loading/Loading";

interface Options {
  loading?: () => void,
  delay?: number,
  timeout?: number,
  loader: any
}

function MyLoadable(options: Options) {
  return Loadable(Object.assign({
    loading: Loading,
    delay: 200,
    timeOut: 10000
  }, options));
}

export default MyLoadable;