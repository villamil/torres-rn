export const AUTH_START = "AUTH_START";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_ERROR = "AUTH_ERROR";

export const AUTH_LOGOUT = "AUTH_LOGOUT";

export const REMEMBER_SESION = "REMEMBER_SESION";

export const authenticate = userInfo => ({
  type: AUTH_START,
  payload: userInfo
});

export const rememberSesion = remember => ({
  type: REMEMBER_SESION,
  payload: { rememberSesion: remember }
});

export const logout = () => {
  console.log("log");
  return {
    type: AUTH_LOGOUT,
    payload: {}
  };
};
