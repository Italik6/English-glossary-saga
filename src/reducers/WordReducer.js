import { SEARCH_WORD_SUCCESS } from "../actions/types";

const initialState = {
  wordData: {}
};

export default function(state = initialState, action) {
  console.log("reducer", action.payload);
  switch (action.type) {
    case SEARCH_WORD_SUCCESS:
      return {
        wordData: action.payload.data
      };
    default:
      return state;
  }
}
