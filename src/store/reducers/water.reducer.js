import {
  GET_WATER_START,
  GET_WATER_SUCCESS,
  GET_WATER_ERROR
} from "../actions/water.action";

const initialState = {
  data: {},
  hasError: false,
  loading: false
};

const waterReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WATER_START: {
      return {
        ...state,
        loading: true
      };
    }
    case GET_WATER_SUCCESS: {
      return {
        ...state,
        loading: false,
        hasError: false,
        data: { ...action.payload }
      };
    }
    case GET_WATER_ERROR: {
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

export default waterReducer;
