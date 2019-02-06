import { combineReducers } from "redux";
import WordReducer from "./WordReducer";
import RhymesReducer from "./RhymesReducer";
import AdvancedSearchReducer from "./AdvancedSearchReducer";

const rootReducer = combineReducers({
  wordData: WordReducer,
  rhymes: RhymesReducer,
  advancedSearch: AdvancedSearchReducer
});

export default rootReducer;
