import { TEST } from "../actions/types";

const initialState = {
  test: 1
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TEST:
      return {
        test: state.test + 1
      };
    default:
      return state;
  }
}
