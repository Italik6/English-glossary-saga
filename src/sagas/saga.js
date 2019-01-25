import { takeLatest, put, call } from "redux-saga/effects";
import { TEST_ASYNC, TEST } from "../actions/types";
import * as api from "../api/api";

function* testAsync({ payload }) {
  console.log("saga", payload);
  try {
    const result = yield call(api.searchWord, { word: payload });
    console.log("result", result);
    yield put({ type: TEST_ASYNC, payload: result });
  } catch (e) {
    console.log("error", e);
  }
}

export function* watchTest() {
  yield takeLatest(TEST, testAsync);
}
