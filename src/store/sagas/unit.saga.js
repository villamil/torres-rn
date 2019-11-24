import { takeEvery, put, call } from "redux-saga/effects";

import {
  GET_UNIT_START,
  GET_UNIT_SUCCESS,
  GET_UNIT_ERROR,
  DELETE_USER_START,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
  CHANGE_USER_PERMISSION_START,
  CHANGE_USER_PERMISSION_SUCCESS,
  CHANGE_USER_PERMISSION_ERROR
} from "../actions/unit.action";
import { API_URI, HEADERS } from "../../utils/api";

export function* getUnit({ payload }) {
  try {
    const result = yield fetch(
      `${API_URI}/units/${payload.unitId}`
    ).then(response => response.json());
    if (result.error) {
      yield put({ type: GET_UNIT_ERROR });
    } else {
      yield put({ type: GET_UNIT_SUCCESS, payload: result });
    }
  } catch (error) {
    console.log("error", error);
  }
}

export function* deleteUser({ payload }) {
  try {
    const result = yield fetch(
      `${API_URI}/users/${payload.userId}/unit/${payload.unitId}`,
      {
        method: "DELETE"
      }
    ).then(response => response.json());
    if (result.error) {
      yield put({ type: DELETE_USER_ERROR });
    } else {
      yield put({ type: DELETE_USER_SUCCESS, payload: result });
    }
  } catch (error) {
    console.log("error", error);
  }
}

export function* changeUserPermission({ payload }) {
  try {
    const result = yield fetch(
      `${API_URI}/users/${payload.userId}/unit/${payload.unitId}`,
      {
        method: "POST",
        headers: {
          ...HEADERS
        },
        body: JSON.stringify(payload)
      }
    ).then(response => response.json());
    if (result.error) {
      yield put({ type: CHANGE_USER_PERMISSION_ERROR });
    } else {
      yield put({ type: CHANGE_USER_PERMISSION_SUCCESS, payload: result });
    }
  } catch (error) {
    console.log("error", error);
  }
}

export function* unitSaga() {
  yield takeEvery(GET_UNIT_START, getUnit);
  yield takeEvery(DELETE_USER_START, deleteUser);
  yield takeEvery(CHANGE_USER_PERMISSION_START, changeUserPermission);
}
