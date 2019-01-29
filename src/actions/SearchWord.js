import { SEARCH_WORD, SEARCH_WORD_SUCCESS, SEARCH_WORD_ERROR } from "./types";

export const searchWordAction = word => {
  return { type: SEARCH_WORD, payload: word };
};

export const searchWordActionSuccess = ({ wordData }) => {
  return { type: SEARCH_WORD_SUCCESS, payload: wordData };
};

export const searchWordActionError = error => {
  return { type: SEARCH_WORD_ERROR, payload: error };
};
