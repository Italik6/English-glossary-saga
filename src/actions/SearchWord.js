import { SEARCH_WORD, SEARCH_WORD_SUCCESS } from "./types";

export const searchWordAction = word => {
  console.log("word action", word);
  return { type: SEARCH_WORD, payload: word };
};

export const searchWordActionSuccess = ({wordData}) => {
  console.log("word success", wordData);
  return { type: SEARCH_WORD_SUCCESS, payload: wordData };
};
