import { takeEvery, put, call } from "redux-saga/effects";

import { VALIDATE_CODE } from "../actions/signUpAction";
import { API_URI } from "../../utils/api";

export function* validateCode({ payload }) {
  try {
    const result = yield fetch(`${API_URI}/codes/${payload.code}`).then(
      response => response.json()
    );
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

export function* signUpSaga() {
  yield takeEvery(VALIDATE_CODE, validateCode);
}
