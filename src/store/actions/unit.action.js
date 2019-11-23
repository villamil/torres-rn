export const GET_UNIT_START = "GET_UNIT_START";
export const GET_UNIT_SUCCESS = "GET_UNIT_SUCCESS";
export const GET_UNIT_ERROR = "GET_UNIT_ERROR";

export const getUnit = unitId => ({
  type: GET_UNIT_START,
  payload: { unitId }
});
