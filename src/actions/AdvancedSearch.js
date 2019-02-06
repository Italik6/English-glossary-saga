import { ADVANCED_SEARCH, ADVANCED_SEARCH_SUCCESS } from "./types";

export const advancedSearchAction = (lettersAmount, firstLetter) => {
  return { type: ADVANCED_SEARCH, payload: { lettersAmount, firstLetter } };
};

export const advancedSearchActionSuccess = advancedSearch => {
  return { type: ADVANCED_SEARCH_SUCCESS, payload: advancedSearch };
};
