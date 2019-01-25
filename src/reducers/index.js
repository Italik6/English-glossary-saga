import { combineReducers } from "redux";
import WordReducer from "./WordReducer";

const rootReducer = combineReducers({
  wordData: WordReducer
});

export default rootReducer;
