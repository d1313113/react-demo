import {stringify} from 'qs';
import baseUrl from "./baseUrl";

function requestGet(url) {
  return async params => {
    const res = await fetch(baseUrl + url + `?${stringify(params)}`, {
      method: "GET",
      // credentials: "include"
    });
    const json = await res.json();
    if (json.code === 0) {
      return json.data;
    }
    let errorMsg = json.data && json.data.msg;
    throw Error(errorMsg || "服务器异常");
  };
}

function requestPost(url) {
  return async params => {
    // const formData = new FormData();
    // for (let k in params) {
    //   formData.append(k, params[k]);
    // }
    const res = await fetch(baseUrl + url, {
      method: "post",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
    //   mode: "cors",
      credentials: "include",
      body: stringify(params)
    });
    const json = await res.json();
    if (json.code === 0) {
      return json.data;
    }else{
        let errorMsg = json.data && json.data.msg;
        throw Error(errorMsg || "服务器异常");
    }
  };
}

function requestPostFormData(url) {
    return async params => {
      const formData = new FormData();
      for (let k in params) {
        formData.append(k, params[k]);
      }
      const res = await fetch(baseUrl + url, {
        method: "post",
        headers: {
        //   "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
      //   mode: "cors",
        credentials: "include",
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
  }




export const request = {
  get: requestGet,
  post: requestPost,
  form: requestPostFormData
}
