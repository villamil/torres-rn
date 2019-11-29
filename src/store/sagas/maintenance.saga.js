import { takeEvery, put, call } from "redux-saga/effects";

import {
  GET_MAINTENANCE_START,
  GET_MAINTENANCE_SUCCESS,
  GET_MAINTENANCE_ERROR
} from "../actions/maintenance.action";
import { API_URI, HEADERS } from "../../utils/api";

export function* getMaintenance({ payload }) {
  try {
    let URI = `${API_URI}/maintenance/${payload.unitId}`;
    let limit = "";
    if (payload.limit) {
      limit = `?limit=${payload.limit}`;
    }
    const result = yield fetch(`${URI}${limit}`).then(response =>
      response.json()
    );
    if (result.error) {
      yield put({ type: GET_MAINTENANCE_ERROR });
    } else {
      yield put({ type: GET_MAINTENANCE_SUCCESS, payload: result });
    }
  } catch (error) {
    console.log("error", error);
  }
}

export function* maintenanceSaga() {
  yield takeEvery(GET_MAINTENANCE_START, getMaintenance);
}
