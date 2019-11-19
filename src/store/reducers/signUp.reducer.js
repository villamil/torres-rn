import {
  VALID_CODE,
  INVALID_CODE,
  RESTORE_CODE
} from "../actions/signUpAction";

const initialState = {
  code: "",
  isOnwer: false,
  isValidCode: false,
  hasError: false
};

const systemReducer = (state = initialState, action) => {
  switch (action.type) {
    case VALID_CODE: {
      return {
        ...state,
        ...action.payload
      };
    }
    case INVALID_CODE: {
      return {
        ...state,
        code: "",
        isOnwer: false,
        isValidCode: false,
        hasError: true
      };
    }
    case RESTORE_CODE: {
      return {
        ...initialState
      };
    }
    default: {
      return state;
    }
  }
};

export default systemReducer;
