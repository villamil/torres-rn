export const GET_WATER_START = "GET_WATER_START";
export const GET_WATER_SUCCESS = "GET_WATER_SUCCESS";
export const GET_WATER_ERROR = "GET_WATER_ERROR";

export const getWater = unitId => ({
  type: GET_WATER_START,
  payload: { unitId }
});
