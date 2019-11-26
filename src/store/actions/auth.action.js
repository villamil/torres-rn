export const AUTH_START = "AUTH_START";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_ERROR = "AUTH_ERROR";

export const AUTH_LOGOUT = "AUTH_LOGOUT";

export const AUTH_CHANGE_UNIT = "AUTH_CHANGE_UNIT";

export const REMEMBER_SESION = "REMEMBER_SESION";

export const changeUnit = unit => ({
  type: AUTH_CHANGE_UNIT,
  payload: { unit }
});

export const authenticate = userInfo => ({
  type: AUTH_START,
  payload: userInfo
});

export const rememberSesion = remember => ({
  type: REMEMBER_SESION,
  payload: { rememberSesion: remember }
});

export const logout = () => {
  return {
    type: AUTH_LOGOUT,
    payload: {}
  };
};
