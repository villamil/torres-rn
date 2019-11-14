import { VALIDATE_CODE_RESPONSE } from "../actions/signUpAction";

const initialState = {
  code: "",
  isValidCode: false
};

const systemReducer = (state = initialState, action) => {
  switch (action.type) {
    case VALIDATE_CODE_RESPONSE: {
      return {
        ...state,
        code: action.payload.code,
        isValidCode: action.payload.isValidCode
      };
    }
    default: {
      return state;
    }
  }
};

export default systemReducer;
