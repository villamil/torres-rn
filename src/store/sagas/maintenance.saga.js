import { takeEvery, put, call } from "redux-saga/effects";

import {
  GET_MAINTENANCE_START,
  GET_MAINTENANCE_SUCCESS,
  GET_MAINTENANCE_ERROR
} from "../actions/maintenance.action";
import { showToast } from "../actions/toast.action";
import { apiRequest } from "../../utils/api";

export function* getMaintenance({ payload }) {
  try {
    let URI = `/maintenance/${payload.unitId}`;
    let limit = "";
    if (payload.limit) {
      limit = `?limit=${payload.limit}`;
    }

    const result = yield apiRequest(`${URI}${limit}`);

    yield put({ type: GET_MAINTENANCE_SUCCESS, payload: result });
    yield put(showToast({ message: "Actualizado!" }));
  } catch (error) {
    console.log("error maintenance", error);
    yield put({ type: GET_MAINTENANCE_ERROR });
    yield put(showToast({ message: "Error al actualizar." }));
  }
}

export function* maintenanceSaga() {
  yield takeEvery(GET_MAINTENANCE_START, getMaintenance);
}
