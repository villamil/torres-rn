import { takeEvery, put, call } from "redux-saga/effects";

import {
  VALIDATE_CODE,
  INVALID_CODE,
  VALID_CODE,
  SIGNUP_START,
  SIGNUP_RESULT,
  SIGNUP_ERROR
} from "../actions/signUpAction";
import { apiRequest } from "../../utils/api";
import { showToast } from "../actions/toast.action";

export function* validateCode({ payload }) {
  try {
    const result = yield apiRequest(`/codes/${payload.code}`);

    const resultPayload = {
      code: payload.code,
      isOwner: result.ownerCode === payload.code,
      isValidCode: true
    };
    yield put({ type: VALID_CODE, payload: { ...resultPayload } });
  } catch (error) {
    yield put({ type: INVALID_CODE, error });
    yield put({ type: INVALID_CODE, error: { ...error.error } });

    console.log(error);
  }
}

export function* signUp({ payload }) {
  try {
    const result = yield apiRequest(
      `/auth/signup`,
      { method: "POST" },
      payload
    );
    yield put(showToast({ message: "Cuenta creada!" }));
    yield put({ type: SIGNUP_RESULT });
  } catch (error) {
    console.log(error);
    yield put({ type: SIGNUP_ERROR });
  }
}

export function* signUpSaga() {
  yield takeEvery(VALIDATE_CODE, validateCode);
  yield takeEvery(SIGNUP_START, signUp);
}
