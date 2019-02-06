import { ADVANCED_SEARCH, ADVANCED_SEARCH_SUCCESS } from "../actions/types";

const initialState = {
  advancedSearch: [],
  isFetching: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADVANCED_SEARCH:
      return { isFetching: true };
    case ADVANCED_SEARCH_SUCCESS:
      return action.payload;
    default:
      return [];
  }
}
