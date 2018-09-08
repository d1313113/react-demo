import { TEST_REDUEX } from "./constants";

export const test = (name) => {
  return {
    type: TEST_REDUEX,
    name
  };
};