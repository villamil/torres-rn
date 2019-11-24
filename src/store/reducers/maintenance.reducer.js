import {
  GET_MAINTENANCE_START,
  GET_MAINTENANCE_SUCCESS,
  GET_MAINTENANCE_ERROR,
  CLEAR_MAINTENANCE
} from "../actions/maintenance.action";

const initialState = {
  data: {},
  hasError: false,
  loading: false
};

const maintenanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MAINTENANCE_START: {
      return {
        ...state,
        loading: true
      };
    }
    case GET_MAINTENANCE_SUCCESS: {
      return {
        ...state,
        loading: false,
        hasError: false,
        data: { ...action.payload }
      };
    }
    case GET_MAINTENANCE_ERROR: {
      return {
        ...state,
        loading: false,
        hasError: true
      };
    }
    case CLEAR_MAINTENANCE: {
      return {
        ...initialState
      };
    }
    default:
      return state;
  }
};

export default maintenanceReducer;
