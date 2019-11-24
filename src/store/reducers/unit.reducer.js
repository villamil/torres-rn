import {
  GET_UNIT_START,
  GET_UNIT_SUCCESS,
  GET_UNIT_ERROR,
  DELETE_USER_START,
  DELETE_USER_ERROR,
  DELETE_USER_SUCCESS,
  CHANGE_USER_PERMISSION_START,
  CHANGE_USER_PERMISSION_SUCCESS,
  CHANGE_USER_PERMISSION_ERROR,
  CLEAR_UNIT
} from "../actions/unit.action";

const initialState = {
  data: {},
  hasError: false,
  loading: false
};

const unitReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_UNIT_START: {
      return {
        ...state,
        loading: true
      };
    }
    case GET_UNIT_SUCCESS: {
      return {
        ...state,
        loading: false,
        hasError: false,
        data: { ...action.payload }
      };
    }
    case GET_UNIT_ERROR: {
      return {
        ...state,
        loading: false,
        hasError: true
      };
    }
    case DELETE_USER_START: {
      return {
        ...state,
        loading: true
      };
    }
    case DELETE_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        hasError: false,
        data: { ...state.data, ...action.payload }
      };
    }
    case DELETE_USER_ERROR: {
      return {
        ...state,
        loading: false,
        hasError: true
      };
    }
    case CHANGE_USER_PERMISSION_START: {
      return {
        ...state,
        loading: true
      };
    }
    case CHANGE_USER_PERMISSION_SUCCESS: {
      return {
        ...state,
        loading: false,
        hasError: false,
        data: { ...state.data, ...action.payload }
      };
    }
    case CHANGE_USER_PERMISSION_ERROR: {
      return {
        ...state,
        loading: false,
        hasError: true
      };
    }
    case CLEAR_UNIT: {
      return { ...initialState };
    }
    default:
      return state;
  }
};

export default unitReducer;
