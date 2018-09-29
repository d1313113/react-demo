import request from "../utils/request";

// console.log(get);
/**
 * 获取用户注册信息
 */
export const getRegister = params => request.get("/v113/userinfo/register", params);
/**
 * 获取默认饮食
 * 1.havedrinType 1早餐 2午餐 3晚餐 4加餐 5运动。
 */
export const getDefaultFood = params => request.get("/dietsport/v113/default", params);
/**
 * 获取目标管理
 * 1.unionid
 */
export const getManagementid = params => request.get("/weightmanagement/v11/managementid", params);
/**
 * 获取用户积分
 * 1._p
 */
export const getCredits = params => request.get("/v113/userinfo/credits", params);