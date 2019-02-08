import { SEARCH_RHYMES_SUCCESS, SEARCH_RHYMES } from "../actions/types";

const initialState = {
  rhymes: [],
  isFetching: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_RHYMES:
      return { isFetching: true };
    case SEARCH_RHYMES_SUCCESS:
      return action.payload;
    default:
      return [];
  }
}
