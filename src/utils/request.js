import {stringify} from "qs";
import baseUrl from "./baseUrl";


const requestGet = async (url, params) => {
  const res = await fetch(baseUrl.HTTP_BAST_URL + url + `?${stringify(params)}`, {
    method: "GET"
    // credentials: "include",
    // mode: "no-cors"
  });
  const json = await res.json();
  if (res.status === 200) {
    console.log(json,"数据");
    const data = json.data || json;
    return data;
  }
  // if (json.code === 0) {
  //   console.log("请求成功");
  //   return json.data;
  // }
  let errorMsg = json.data && json.data.msg;
  throw Error(errorMsg || "服务器异常");
};


const requestPost =  async (url, params) => {
  // const formData = new FormData();
  // for (let k in params) {
  //   formData.append(k, params[k]);
  // }
  const res = await fetch(baseUrl.HTTP_BAST_URL + url, {
    method: "POST",
    headers: {
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
    // mode: "no-cors",
    // credentials: "include",
    body: stringify(params)
  });
  const json = await res.json();
  // if (json.code === 0) {
  if (res.status === 200) {
    const data = json.data || json;
    // return json.data;
    return data;
  }else{
      let errorMsg = json.data && json.data.msg;
      throw Error(errorMsg || "服务器异常");
  }
};



const requestPostFormData =  async (url, params) => {
  const formData = new FormData();
  for (let k in params) {
    formData.append(k, params[k]);
  }
  const res = await fetch(baseUrl.HTTP_BAST_URL + url, {
    method: "POST",
    headers: {
    //   "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
    // mode: "no-cors",
    // credentials: "include",
    body: formData
  });
  const json = await res.json();
  if (json.code === 0) {
    return json.data;
  }else{
    let errorMsg = json.data && json.data.msg;
    throw Error(errorMsg || "服务器异常");
  }
};





export default {
  get: requestGet,
  post: requestPost,
  form: requestPostFormData
};
