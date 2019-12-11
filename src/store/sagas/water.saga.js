import { takeEvery, put, call } from "redux-saga/effects";

import {
  GET_WATER_START,
  GET_WATER_SUCCESS,
  GET_WATER_ERROR
} from "../actions/water.action";
import { apiRequest } from "../../utils/api";
import fetch from "../../utils/fetchWithTimeout";

export function* getWater({ payload }) {
  try {
    let URI = `/water/${payload.unitId}`;
    let limit = "";
    if (payload.limit) {
      limit = `?limit=${payload.limit}`;
    }
    const result = yield apiRequest(`${URI}${limit}`);

    yield put({ type: GET_WATER_SUCCESS, payload: result });
  } catch (error) {
    console.log("error water", error);
    yield put({ type: GET_WATER_ERROR });
  }
}

export function* waterSaga() {
  yield takeEvery(GET_WATER_START, getWater);
}
