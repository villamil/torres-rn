import { takeEvery, put, call } from "redux-saga/effects";

import {
  GET_WATER_START,
  GET_WATER_SUCCESS,
  GET_WATER_ERROR
} from "../actions/water.action";
import { API_URI, HEADERS } from "../../utils/api";

export function* getWater({ payload }) {
  try {
    const result = yield fetch(
      `${API_URI}/water/${payload.unitId}`
    ).then(response => response.json());
    if (result.error) {
      yield put({ type: GET_WATER_ERROR });
    } else {
      yield put({ type: GET_WATER_SUCCESS, payload: result });
    }
  } catch (error) {
    console.log("error", error);
  }
}

export function* waterSaga() {
  yield takeEvery(GET_WATER_START, getWater);
}
