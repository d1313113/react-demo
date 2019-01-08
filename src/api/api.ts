import fetch from "../utils/fetch";


export const getProfile = (params: object) => fetch.get("/clock/clockInfo", params);
