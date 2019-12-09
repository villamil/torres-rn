import { takeEvery, put, call } from "redux-saga/effects";

import {
  GET_WATER_START,
  GET_WATER_SUCCESS,
  GET_WATER_ERROR
} from "../actions/water.action";
import { API_URI, HEADERS } from "../../utils/api";
import fetch from "../../utils/fetchWithTimeout";

export function* getWater({ payload }) {
  try {
    let URI = `${API_URI}/water/${payload.unitId}`;
    let limit = "";
    if (payload.limit) {
      limit = `?limit=${payload.limit}`;
    }
    const result = yield fetch(`${URI}${limit}`, 1000 * 10).then(response =>
      response.json()
    );
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
