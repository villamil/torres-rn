import { takeEvery, put, call } from "redux-saga/effects";

import { AUTH_START, AUTH_SUCCESS, AUTH_ERROR } from "../actions/auth.action";
import { API_URI, HEADERS } from "../../utils/api";

export function* authenticate({ payload }) {
  try {
    const result = yield fetch(`${API_URI}/auth`, {
      method: "POST",
      headers: {
        ...HEADERS
      },
      body: JSON.stringify(payload)
    }).then(response => response.json());
    if (result.error) {
      yield put({ type: AUTH_ERROR });
    } else {
      const payloadResult = {
        ...result.metadata,
        token: result.token
      };
      yield put({ type: AUTH_SUCCESS, payload: payloadResult });
    }
  } catch (error) {
    console.log("error", error);
  }
}

export function* authSaga() {
  yield takeEvery(AUTH_START, authenticate);
}
