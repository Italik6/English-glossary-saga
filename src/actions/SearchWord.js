import { SEARCH_WORD } from "./types";

export const searchWordAction = word => {
  console.log("word action", word);
  return { type: SEARCH_WORD, payload: word };
};
