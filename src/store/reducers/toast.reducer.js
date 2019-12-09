import { TOAST_SHOW, TOAST_HIDE } from "../actions/toast.action";

const initialState = {
  show: false,
  message: "",
  duration: 1000 * 1
};

function toastReducer(state = initialState, actions) {
  switch (actions.type) {
    case TOAST_SHOW: {
      return {
        ...state,
        show: true,
        message: actions.payload.message
      };
    }
    case TOAST_HIDE: {
      return {
        ...initialState
      };
    }
    default:
      return state;
  }
}

export default toastReducer;
