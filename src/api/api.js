import request from "../utils/request";

// console.log(get);

export const getRegister = params => request.get("/v113/userinfo/register", params);
