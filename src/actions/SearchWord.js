import { SEARCH_WORD, SEARCH_WORD_SUCCESS, SEARCH_WORD_ERROR } from "./types";

export const searchWordAction = word => {
  console.log("word action", word);
  return { type: SEARCH_WORD, payload: word };
};

export const searchWordActionSuccess = ({ wordData }) => {
  console.log("word success", wordData);
  return { type: SEARCH_WORD_SUCCESS, payload: wordData };
};

export const searchWordActionError = error => {
  console.log("word error", error);
  return { type: SEARCH_WORD_ERROR, payload: error };
};
