import wordSagas from "./wordDataSagas";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([...wordSagas]);
}
