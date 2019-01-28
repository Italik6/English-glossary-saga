import { combineReducers } from "redux";
import WordReducer from "./WordReducer";

const rootReducer = combineReducers({
  wordData: WordReducer,
  isError: WordReducer
});

export default rootReducer;
