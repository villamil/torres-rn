import { takeEvery, put, call } from "redux-saga/effects";

import {
  GET_MAINTENANCE_START,
  GET_MAINTENANCE_SUCCESS,
  GET_MAINTENANCE_ERROR
} from "../actions/maintenance.action";
import { showToast } from "../actions/toast.action";
import { API_URI, HEADERS } from "../../utils/api";
import fetch from "../../utils/fetchWithTimeout";

export function* getMaintenance({ payload }) {
  try {
    let URI = `${API_URI}/maintenance/${payload.unitId}`;
    let limit = "";
    if (payload.limit) {
      limit = `?limit=${payload.limit}`;
    }
    const result = yield fetch(`${URI}${limit}`, 1000 * 10).then(response =>
      response.json()
    );
    if (result.error) {
      yield put({ type: GET_MAINTENANCE_ERROR });
      yield put(showToast({ message: "Error al actualizar." }));
    } else {
      yield put({ type: GET_MAINTENANCE_SUCCESS, payload: result });
      yield put(showToast({ message: "Actualizado!" }));
    }
  } catch (error) {
    console.log("error", error);
  }
}

export function* maintenanceSaga() {
  yield takeEvery(GET_MAINTENANCE_START, getMaintenance);
}
