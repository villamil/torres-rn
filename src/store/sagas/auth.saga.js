import { takeEvery, put, call } from "redux-saga/effects";

import { AUTH_START, AUTH_SUCCESS, AUTH_ERROR } from "../actions/auth.action";
import { apiRequest } from "../../utils/api";
import { showToast } from "../actions/toast.action";

export function* authenticate({ payload }) {
  try {
    const result = yield apiRequest("/auth", { method: "POST" }, payload);
    console.log(result);

    const payloadResult = {
      token: result.token
    };
    yield put({ type: AUTH_SUCCESS, payload: payloadResult });
  } catch (error) {
    console.log("error auth", error);
    yield put(showToast({ message: "Correo o contrasena incorrecto." }));
    yield put({ type: AUTH_ERROR });
  }
}

export function* authSaga() {
  yield takeEvery(AUTH_START, authenticate);
}
