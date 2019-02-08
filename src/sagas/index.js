import { all, fork } from "redux-saga/effects";
import watchSearchWord from "./wordSaga";
import watchSearchRhymes from "./rhymesSaga";
import watchAdvancedSearch from "./advancedSearchSaga";

const wordSagas = [
  fork(watchSearchWord),
  fork(watchSearchRhymes),
  fork(watchAdvancedSearch)
];

export default function* rootSaga() {
  yield all([...wordSagas]);
}
