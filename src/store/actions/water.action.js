export const GET_WATER_START = "GET_WATER_START";
export const GET_WATER_SUCCESS = "GET_WATER_SUCCESS";
export const GET_WATER_ERROR = "GET_WATER_ERROR";

export const CLEAR_WATER = "CLEAR_WATER";

export const getWater = unitId => ({
  type: GET_WATER_START,
  payload: { unitId }
});

export const clearWater = () => ({
  type: CLEAR_WATER,
  payload: {}
});
