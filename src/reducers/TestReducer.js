import { TEST_ASYNC } from "../actions/types";

const initialState = {
  test: 1
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TEST_ASYNC:
      return {
        test: state.test + 1
      };
    default:
      return state;
  }
}
