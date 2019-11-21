export const AUTH_START = "AUTH_START";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_ERROR = "AUTH_ERROR";

export const authenticate = userInfo => ({
  type: AUTH_START,
  payload: userInfo
});
