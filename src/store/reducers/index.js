import { combineReducers } from "redux";

import system from "./systemReducer";
import singUp from "./signUp.reducer";
import auth from "./auth.reducer";

const rootReducer = combineReducers({
  system,
  singUp,
  auth
});

export default rootReducer;
