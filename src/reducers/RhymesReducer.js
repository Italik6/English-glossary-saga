import { SEARCH_RHYMES_SUCCESS } from "../actions/types";

const initialState = {
  rhymes: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_RHYMES_SUCCESS:
      return action.payload;
    default:
      return [];
  }
}
