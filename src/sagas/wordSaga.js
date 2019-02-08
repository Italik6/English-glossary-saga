import { takeLatest, put, call } from "redux-saga/effects";
import { SEARCH_WORD } from "../actions/types";
import {
  searchWordActionSuccess,
  searchWordActionError
} from "../actions/SearchWord";
import * as api from "../api/api";

function* searchWord({ payload }) {
  try {
    const result = yield call(api.searchWord, { word: payload });
    yield put(
      searchWordActionSuccess({
        wordData: result.data
      })
    );
  } catch (e) {
    yield put(
      searchWordActionError({
        isError: true
      })
    );
  }
}

export default function* watchSearchWord() {
  yield takeLatest(SEARCH_WORD, searchWord);
}
