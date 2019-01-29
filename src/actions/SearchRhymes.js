import { SEARCH_RHYMES, SEARCH_RHYMES_SUCCESS } from "./types";

export const searchRhymesAction = word => {
  return { type: SEARCH_RHYMES, payload: word };
};

export const searchRhymesActionSuccess = ({ rhymes }) => {
  return { type: SEARCH_RHYMES_SUCCESS, payload: rhymes };
};
