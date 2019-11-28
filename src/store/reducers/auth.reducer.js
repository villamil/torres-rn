import {
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_ERROR,
  AUTH_LOGOUT,
  REMEMBER_SESION,
  AUTH_CHANGE_UNIT
} from "../actions/auth.action";

const initialState = {
  rememberSesion: false,
  token: "",
  defaultUnitId: "",
  firstName: "",
  lastName: "",
  email: "",
  isOwner: false,
  loading: false,
  logged: false,
  hasError: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_CHANGE_UNIT: {
      return {
        ...state,
        defaultUnitId: action.payload.unit.id
      };
    }
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
        ...action.payload,
        defaultUnitId: action.payload.defaultUnit.id,
        loading: false,
        logged: true
      };
    }
    case AUTH_ERROR: {
      return {
        ...initialState,
        hasError: true
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
