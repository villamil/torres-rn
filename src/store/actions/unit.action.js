export const GET_UNIT_START = "GET_UNIT_START";
export const GET_UNIT_SUCCESS = "GET_UNIT_SUCCESS";
export const GET_UNIT_ERROR = "GET_UNIT_ERROR";

export const CLEAR_UNIT = "CLEAR_UNIT";

export const DELETE_USER_START = "DELETE_USER_START";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_ERROR = "DELETE_USER_ERROR";

export const CHANGE_USER_PERMISSION_START = "CHANGE_USER_PERMISSION_START";
export const CHANGE_USER_PERMISSION_SUCCESS = "CHANGE_USER_PERMISSION_SUCCESS";
export const CHANGE_USER_PERMISSION_ERROR = "CHANGE_USER_PERMISSION_ERROR";

export const getUnit = unitId => ({
  type: GET_UNIT_START,
  payload: { unitId }
});

export const clearUnit = () => ({
  type: CLEAR_UNIT,
  payload: {}
});

export const deleteUser = userUnitId => ({
  type: DELETE_USER_START,
  payload: { userUnitId }
});

export const changeUserPermision = (userUnitId, makeAdmin) => ({
  type: CHANGE_USER_PERMISSION_START,
  payload: { userUnitId, makeAdmin }
});
