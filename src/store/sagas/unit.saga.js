import { takeEvery, put, call } from "redux-saga/effects";

import {
  GET_UNIT_START,
  GET_UNIT_SUCCESS,
  GET_UNIT_ERROR
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

export function* unitSaga() {
  yield takeEvery(GET_UNIT_START, getUnit);
}
