import { takeEvery, put, delay } from "redux-saga/effects";

function* testAsync() {
  yield delay(2000);
  yield put({ type: "TEST_ASYNC" });
}

export function* watchTest() {
  yield takeEvery("TEST", testAsync);
}
