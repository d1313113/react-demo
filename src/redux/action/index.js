import * as userAction from "./user";
import { TEST_REDUEX } from "./constants";

export function createAction(type, payload) {
  return {
    type,
    payload
  };
}

export const test = (name) => {
  return {
    type: TEST_REDUEX,
    name
  };
};

export default {
  userAction
};