import {
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_ERROR,
  AUTH_LOGOUT,
  REMEMBER_SESION
} from "../actions/auth.action";

const initialState = {
  rememberSesion: false,
  token: "",
  defaultUnitId: "",
  isOwner: false,
  loading: false,
  logged: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_START: {
      return {
        ...state,
        loading: true,
        rememberSesion: action.payload.rememberSesion
      };
    }
    case AUTH_SUCCESS: {
      return {
        ...state,
        token: action.payload.token,
        isOwner: action.payload.isOwner,
        defaultUnitId: action.payload.defaultUnitId,
        loading: false,
        logged: true
      };
    }
    case AUTH_ERROR: {
      return {
        ...state,
        token: "",
        loading: false,
        logged: false
      };
    }
    case AUTH_LOGOUT: {
      return initialState;
    }
    case REMEMBER_SESION: {
      return {
        ...state,
        rememberSesion: action.payload.rememberSesion
      };
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
