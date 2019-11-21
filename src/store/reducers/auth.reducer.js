import { AUTH_START, AUTH_SUCCESS, AUTH_ERROR } from "../actions/auth.action";

const initialState = {
  rememberSesion: false,
  token: "",
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
        token: "igotit",
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
    default: {
      return state;
    }
  }
};

export default authReducer;
