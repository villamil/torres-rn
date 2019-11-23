import {
  GET_UNIT_START,
  GET_UNIT_SUCCESS,
  GET_UNIT_ERROR
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
    default:
      return state;
  }
};

export default unitReducer;
