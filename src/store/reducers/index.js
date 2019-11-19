import { combineReducers } from "redux";

import system from "./systemReducer";
import singUp from "./signUp.reducer";

const rootReducer = combineReducers({
  system,
  singUp
});

export default rootReducer;
