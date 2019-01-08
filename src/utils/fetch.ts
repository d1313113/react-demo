import { HTTP_BASE_URL } from "./baseUrl";
import { stringify } from "qs";


const requestGet = async (url: string, params: object):Promise<{}> => {
  const res = await fetch(`${HTTP_BASE_URL}${url}?${stringify(params)}`, {
    method: "GET"
  });

  const checkRes: Response = await checkStatus(res);

  const json: object = await checkRes.json();
  console.log(json);
  return json;
};

const requestPost = async (url: string, params: object):Promise<{}> => {
  const res = await fetch(`${HTTP_BASE_URL}${url}`, {
    method: "POST",
    headers: {
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
    body: stringify(params)
  });

  const checkRes = await checkStatus(res);

  const data = await checkRes.json();

  return data;
};


const checkStatus = (response: Response): Response => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(response.statusText);
    throw error;
  }
};

// const checkCode = () => {};

export default {
  get: requestGet,
  post :requestPost
}
