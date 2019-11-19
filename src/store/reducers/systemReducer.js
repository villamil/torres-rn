import {
  SYSTEM_UPDATE_INTERNET_STATUS,
  SYSTEM_UPDATE_SERVER_STATUS
} from "../actions/system";
import { WS_CONNECTED, WS_DISCONNECTED } from "../actions/websocket.actions";

const initialState = {
  hasInternetConnection: false,
  hasAccessToServer: false
};

const systemReducer = (state = initialState, action) => {
  switch (action.type) {
    case SYSTEM_UPDATE_INTERNET_STATUS: {
      // console.log("Internet Update");
      return {
        ...state,
        hasInternetConnection: action.payload.hasInternetConnection
      };
    }
    case WS_CONNECTED: {
      console.log("Connected");
      return {
        ...state,
        hasAccessToServer: true
      };
    }
    case WS_DISCONNECTED: {
      console.log("disconnected?");
      return {
        ...state,
        hasAccessToServer: false
      };
    }
    default: {
      return state;
    }
  }
};

export default systemReducer;
