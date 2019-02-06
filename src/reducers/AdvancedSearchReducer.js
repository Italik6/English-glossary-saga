import { ADVANCED_SEARCH_SUCCESS } from "../actions/types";

const initialState = {
  advancedSearch: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADVANCED_SEARCH_SUCCESS:
      return action.payload;
    default:
      return [];
  }
}
