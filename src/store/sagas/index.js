import { all, fork } from "redux-saga/effects";
import { signUpSaga } from "./signUp.saga";
import { authSaga } from "./auth.saga";

export default function* rootSagas() {
  yield all([fork(signUpSaga), fork(authSaga)]);
}
