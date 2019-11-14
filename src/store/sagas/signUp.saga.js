import { takeEvery, put } from "redux-saga/effects";

import { VALIDATE_CODE } from "../actions/signUpAction";

export function* validateCode({ payload }) {
  yield console.log(payload);
}

export function* signUpSaga() {
  yield takeEvery(VALIDATE_CODE, validateCode);
}
