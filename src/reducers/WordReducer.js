import { SEARCH_WORD_SUCCESS, SEARCH_WORD_ERROR } from "../actions/types";

const initialState = {
  wordData: {},
  isError: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_WORD_SUCCESS:
      return action.payload;
    case SEARCH_WORD_ERROR:
      return { isError: true };
    default:
      return state;
  }
}
