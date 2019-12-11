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
import { apiRequest } from "../../utils/api";
import { showToast } from "../actions/toast.action";

export function* getUnit({ payload }) {
  try {
    const result = yield apiRequest(`/units/${payload.unitId}`);
    console.log(result);
    yield put({ type: GET_UNIT_SUCCESS, payload: result });
  } catch (error) {
    console.log("error unit", error);
    yield put({ type: GET_UNIT_ERROR });
  }
}

export function* getUnitList({ payload }) {
  try {
    const result = yield apiRequest(`/user-unit/${payload.userId}`);

    yield put({ type: GET_UNIT_LIST_SUCCESS, payload: result });
  } catch (error) {
    yield put({ type: GET_UNIT_LIST_ERROR });
    console.log("error", error);
  }
}

export function* deleteUser({ payload }) {
  try {
    const result = yield apiRequest(`/user-unit/${payload.userUnitId}`, {
      method: "DELETE"
    });

    yield put({ type: DELETE_USER_SUCCESS, payload: result });
  } catch (error) {
    console.log("error", error);
    yield put({ type: DELETE_USER_ERROR });
  }
}

export function* changeUserPermission({ payload }) {
  try {
    const result = yield apiRequest(
      `/user-unit/${payload.userUnitId}`,
      {
        method: "POST"
      },
      payload
    );

    yield put({ type: CHANGE_USER_PERMISSION_SUCCESS, payload: result });
  } catch (error) {
    console.log("error", error);
    yield put({ type: CHANGE_USER_PERMISSION_ERROR });
  }
}

export function* addUnit({ payload }) {
  try {
    const result = yield apiRequest(
      `/user-unit/${payload.userId}/code/${payload.code}`,
      {
        method: "POST"
      },
      payload
    );

    yield put({ type: ADD_UNIT_SUCCESS, payload: result });
    yield put(showToast({ message: "Agregado!" }));
  } catch (error) {
    console.log("error", error);
    yield put({ type: ADD_UNIT_ERROR });
    yield put(showToast({ message: "Codigo incorrecto." }));
  }
}

export function* unitSaga() {
  yield takeEvery(GET_UNIT_START, getUnit);
  yield takeEvery(GET_UNIT_LIST_START, getUnitList);
  yield takeEvery(DELETE_USER_START, deleteUser);
  yield takeEvery(CHANGE_USER_PERMISSION_START, changeUserPermission);
  yield takeEvery(ADD_UNIT_START, addUnit);
}
