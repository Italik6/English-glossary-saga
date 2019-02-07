import {
  SEARCH_WORD_SUCCESS,
  SEARCH_WORD_ERROR,
  SEARCH_WORD,
  ADVANCED_SEARCH
} from "../actions/types";

const initialState = {
  wordData: {},
  isError: false,
  isFetching: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_WORD:
      return { isFetching: true };
    case SEARCH_WORD_SUCCESS:
      return action.payload;
    case SEARCH_WORD_ERROR:
      return { isError: true };
    case ADVANCED_SEARCH:
      return {};
    default:
      return state;
  }
}
