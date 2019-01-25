import { takeLatest, put, call } from "redux-saga/effects";
import { SEARCH_WORD_SUCCESS, SEARCH_WORD } from "../actions/types";
import * as api from "../api/api";

function* searchWord({ payload }) {
  try {
    const result = yield call(api.searchWord, { word: payload });
    console.log("result", result.data);
    yield put({ type: SEARCH_WORD_SUCCESS, payload: result.data });
  } catch (e) {
    console.log("error", e);
  }
}

export function* watchSearchWord() {
  yield takeLatest(SEARCH_WORD, searchWord);
}
