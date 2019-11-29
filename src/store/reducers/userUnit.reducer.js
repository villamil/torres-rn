import {
  GET_UNIT_LIST_START,
  GET_UNIT_LIST_SUCCESS,
  GET_UNIT_LIST_ERROR
} from "../actions/unit.action";

const initialState = {
  data: {},
  hasError: false,
  loading: false
};

const userUnitReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_UNIT_LIST_START: {
      return {
        ...state,
        loading: true
      };
    }
    case GET_UNIT_LIST_SUCCESS: {
      return {
        ...state,
        loading: false,
        hasError: false,
        data: { ...action.payload }
      };
    }
    case GET_UNIT_LIST_ERROR: {
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

export default userUnitReducer;
