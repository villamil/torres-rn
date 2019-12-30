import {
  VALIDATE_CODE,
  VALID_CODE,
  INVALID_CODE,
  RESTORE_CODE,
  SIGNUP_RESULT,
  SIGNUP_ERROR,
  SIGNUP_ERROR_CODE,
  SIGNUP_ERROR_FORM,
  SIGNUP_START
} from "../actions/signUpAction";

const initialState = {
  code: "",
  isOnwer: false,
  isValidCode: false,
  signUpDone: false,
  hasError: false,
  hasErrorCode: false,
  hasErrorForm: false,
  loading: false
};

const systemReducer = (state = initialState, action) => {
  switch (action.type) {
    case VALIDATE_CODE: {
      return {
        ...state,
        loading: true
      };
    }
    case VALID_CODE: {
      return {
        ...state,
        ...action.payload,
        loading: false
      };
    }
    case INVALID_CODE: {
      return {
        ...state,
        code: "",
        isOnwer: false,
        isValidCode: false,
        hasErrorCode: true,
        loading: false
      };
    }
    case RESTORE_CODE: {
      return {
        ...initialState
      };
    }
    case SIGNUP_START: {
      return {
        ...state,
        loading: true
      };
    }
    case SIGNUP_RESULT: {
      return {
        ...state,
        signUpDone: true,
        loading: false
      };
    }

    case SIGNUP_ERROR: {
      return {
        ...state,
        hasErrorForm: true,
        signUpDone: false,
        loading: false
      };
    }
    default: {
      return state;
    }
  }
};

export default systemReducer;
