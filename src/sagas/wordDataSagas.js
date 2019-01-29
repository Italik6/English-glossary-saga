import { takeLatest, put, call, fork } from "redux-saga/effects";
import { SEARCH_WORD, SEARCH_RHYMES } from "../actions/types";
import {
  searchWordActionSuccess,
  searchWordActionError
} from "../actions/SearchWord";
import { searchRhymesActionSuccess } from "../actions/SearchRhymes";
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

const wordDataSagas = [fork(watchSearchWord), fork(watchSearchRhymes)];

export default wordDataSagas;
