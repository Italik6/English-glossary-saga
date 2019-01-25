import { TEST_ASYNC } from "../actions/types";

const initialState = {
  test: {}
};

export default function(state = initialState, action) {
  console.log("reducer", action.payload);
  switch (action.type) {
    case TEST_ASYNC:
      return {
        test: action.payload
      };
    default:
      return state;
  }
}
