import { takeLatest, put, call } from "redux-saga/effects";
import { SEARCH_RHYMES } from "../actions/types";
import { searchRhymesActionSuccess } from "../actions/SearchRhymes";
import * as api from "../api/api";

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

export default function* watchSearchRhymes() {
  yield takeLatest(SEARCH_RHYMES, searchRhymes);
}
