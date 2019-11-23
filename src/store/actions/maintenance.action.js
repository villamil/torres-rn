export const GET_MAINTENANCE_START = "GET_MAINTENANCE_START";
export const GET_MAINTENANCE_SUCCESS = "GET_MAINTENANCE_SUCCESS";
export const GET_MAINTENANCE_ERROR = "GET_MAINTENANCE_ERROR";

export const getMaintenance = unitId => ({
  type: GET_MAINTENANCE_START,
  payload: { unitId }
});
