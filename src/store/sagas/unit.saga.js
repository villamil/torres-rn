import { takeEvery, put, call } from "redux-saga/effects";

import {
  GET_UNIT_START,
  GET_UNIT_SUCCESS,
  GET_UNIT_ERROR,
  GET_UNIT_LIST_START,
  GET_UNIT_LIST_SUCCESS,
  GET_UNIT_LIST_ERROR,
  DELETE_USER_START,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
  CHANGE_USER_PERMISSION_START,
  CHANGE_USER_PERMISSION_SUCCESS,
  CHANGE_USER_PERMISSION_ERROR,
  ADD_UNIT_START,
  ADD_UNIT_SUCCESS,
  ADD_UNIT_ERROR
} from "../actions/unit.action";
import { API_URI, HEADERS } from "../../utils/api";
import fetch from "../../utils/fetchWithTimeout";
import { showToast } from "../actions/toast.action";

export function* getUnit({ payload }) {
  try {
    const result = yield fetch(
      `${API_URI}/units/${payload.unitId}`,
      1000 * 10
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

export function* getUnitList({ payload }) {
  try {
    const result = yield fetch(
      `${API_URI}/user-unit/${payload.userId}`
    ).then(response => response.json());
    if (result.error) {
      yield put({ type: GET_UNIT_LIST_ERROR });
    } else {
      yield put({ type: GET_UNIT_LIST_SUCCESS, payload: result });
    }
  } catch (error) {
    console.log("error", error);
  }
}

export function* deleteUser({ payload }) {
  try {
    const result = yield fetch(`${API_URI}/user-unit/${payload.userUnitId}`, {
      method: "DELETE"
    }).then(response => response.json());
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
    console.log(payload.userUnitId);
    const result = yield fetch(`${API_URI}/user-unit/${payload.userUnitId}`, {
      method: "POST",
      headers: {
        ...HEADERS
      },
      body: JSON.stringify(payload)
    }).then(response => response.json());
    if (result.error) {
      yield put({ type: CHANGE_USER_PERMISSION_ERROR });
    } else {
      console.log("sagas", result);
      yield put({ type: CHANGE_USER_PERMISSION_SUCCESS, payload: result });
    }
  } catch (error) {
    console.log("error", error);
  }
}

export function* addUnit({ payload }) {
  try {
    console.log(payload);
    const result = yield fetch(
      `${API_URI}/user-unit/${payload.userId}/code/${payload.code}`,
      {
        method: "POST",
        headers: {
          ...HEADERS
        },
        body: JSON.stringify(payload)
      }
    ).then(response => response.json());
    if (result.error) {
      yield put({ type: ADD_UNIT_ERROR });
      yield put(showToast({ message: "Codigo incorrecto." }));
    } else {
      yield put({ type: ADD_UNIT_SUCCESS, payload: result });
      yield put(showToast({ message: "Agregado!" }));
    }
  } catch (error) {
    console.log("error", error);
  }
}

export function* unitSaga() {
  yield takeEvery(GET_UNIT_START, getUnit);
  yield takeEvery(GET_UNIT_LIST_START, getUnitList);
  yield takeEvery(DELETE_USER_START, deleteUser);
  yield takeEvery(CHANGE_USER_PERMISSION_START, changeUserPermission);
  yield takeEvery(ADD_UNIT_START, addUnit);
}
