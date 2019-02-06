import { takeLatest, put, call, fork } from "redux-saga/effects";
import { SEARCH_WORD, SEARCH_RHYMES, ADVANCED_SEARCH } from "../actions/types";
import {
  searchWordActionSuccess,
  searchWordActionError
} from "../actions/SearchWord";
import { searchRhymesActionSuccess } from "../actions/SearchRhymes";
import { advancedSearchActionSuccess } from "../actions/AdvancedSearch";
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

export function* watchSearchWord() {
  yield takeLatest(SEARCH_WORD, searchWord);
}

function* searchRhymes({ payload }) {
  try {
    const result = yield call(api.searchRhymes, { payload });
    yield put(
      searchRhymesActionSuccess({
        rhymes: result.data.rhymes
      })
    );
  } catch (e) {
    console.log(e);
  }
}

export function* watchSearchRhymes() {
  yield takeLatest(SEARCH_RHYMES, searchRhymes);
}

function* advancedSearch({ payload }) {
  try {
    const result = yield call(api.advancedSearch, { payload });
    yield put(
      advancedSearchActionSuccess({
        advancedSearch: result.data.results.data
      })
    );
  } catch (e) {
    console.log(e);
  }
}

export function* watchAdvancedSearch() {
  yield takeLatest(ADVANCED_SEARCH, advancedSearch);
}

const wordDataSagas = [
  fork(watchSearchWord),
  fork(watchSearchRhymes),
  fork(watchAdvancedSearch)
];

export default wordDataSagas;
