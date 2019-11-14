import {
  SYSTEM_UPDATE_INTERNET_STATUS,
  SYSTEM_UPDATE_SERVER_STATUS
} from "../actions/system";

const initialState = {
  hasInternetConnection: false,
  hasAccessToServer: false
};

const systemReducer = (state = initialState, action) => {
  switch (action.type) {
    case SYSTEM_UPDATE_INTERNET_STATUS: {
      return {
        ...state,
        hasInternetConnection: action.payload.hasInternetConnection
      };
    }
    case SYSTEM_UPDATE_SERVER_STATUS: {
      return {
        ...state,
        hasAccessToServer: action.payload.hasAccessToServer
      };
    }
    default: {
      return state;
    }
  }
};

export default systemReducer;
