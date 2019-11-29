import { takeEvery, put, call } from "redux-saga/effects";
import { SERVER_URI, SERVER_PORT } from "react-native-dotenv";

import { AUTH_START, AUTH_SUCCESS, AUTH_ERROR } from "../actions/auth.action";
import { API_URI, HEADERS } from "../../utils/api";
import fetch from "../../utils/fetchWithTimeout";

export function* authenticate({ payload }) {
  try {
    const result = yield fetch(
      `${SERVER_URI}:${SERVER_PORT}/auth`,
      {
        method: "POST",
        headers: {
          ...HEADERS
        },
        body: JSON.stringify(payload)
      },
      1000 * 10
    ).then(response => response.json());
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
    console.log("error auth", error);
    yield put({ type: AUTH_ERROR });
  }
}

export function* authSaga() {
  yield takeEvery(AUTH_START, authenticate);
}
