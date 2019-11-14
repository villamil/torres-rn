import { all, fork } from "redux-saga/effects";
import { signUpSaga } from "./signUp.saga";

export default function* rootSagas() {
  yield all([fork(signUpSaga)]);
}
