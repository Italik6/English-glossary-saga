import { combineReducers } from "redux";
import WordReducer from "./WordReducer";
import RhymesReducer from "./RhymesReducer";

const rootReducer = combineReducers({
  wordData: WordReducer,
  // isError: WordReducer,
  rhymes: RhymesReducer
});


export default rootReducer;
