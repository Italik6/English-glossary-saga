import { takeLatest, put, call } from "redux-saga/effects";
import { SEARCH_WORD } from "../actions/types";
import {searchWordActionSuccess} from "../actions/SearchWord"
import * as api from "../api/api";

function* searchWord({ payload }) {
  try {
    const result = yield call(api.searchWord, { word: payload });
    console.log("result", result.data);
    yield put(
      searchWordActionSuccess({
        wordData: result.data
      })
    );
  } catch (e) {
    console.log("error", e);
  }
}

export function* watchSearchWord() {
  yield takeLatest(SEARCH_WORD, searchWord);
}
