import { takeLatest, put, call } from "redux-saga/effects";
import { ADVANCED_SEARCH } from "../actions/types";
import { advancedSearchActionSuccess } from "../actions/AdvancedSearch";
import * as api from "../api/api";

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

export default function* watchAdvancedSearch() {
  yield takeLatest(ADVANCED_SEARCH, advancedSearch);
}
