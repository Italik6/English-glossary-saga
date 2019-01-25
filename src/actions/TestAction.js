import { TEST } from "./types";

export const testAction = word => {
  console.log("word action", word);
  return { type: TEST, payload: word };
};
