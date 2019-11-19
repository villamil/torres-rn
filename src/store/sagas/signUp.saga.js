import { takeEvery, put, call } from "redux-saga/effects";

import {
  VALIDATE_CODE,
  INVALID_CODE,
  VALID_CODE,
  SIGNUP_START,
  SIGNUP_RESULT,
  SIGNUP_ERROR
} from "../actions/signUpAction";
import { API_URI, HEADERS } from "../../utils/api";

export function* validateCode({ payload }) {
  try {
    const result = yield fetch(
      `${API_URI}/codes/${payload.code}`
    ).then(response => response.json());
    if (result.error) {
      yield put({ type: INVALID_CODE, error: { ...result.error } });
    } else {
      const resultPayload = {
        code: payload.code,
        isOwner: result.ownerCode === payload.code,
        isValidCode: true
      };
      yield put({ type: VALID_CODE, payload: { ...resultPayload } });
    }
  } catch (error) {
    yield put({ type: INVALID_CODE, error });
    console.log(error);
  }
}

export function* signUp({ payload }) {
  try {
    const result = yield fetch(`${API_URI}/users`, {
      method: "POST",
      headers: {
        ...HEADERS
      },
      body: JSON.stringify(payload)
    }).then(response => response.json());
    if (result.error) {
    } else {
    }
    console.log(result);
  } catch (error) {}
}

export function* signUpSaga() {
  yield takeEvery(VALIDATE_CODE, validateCode);
  yield takeEvery(SIGNUP_START, signUp);
}
