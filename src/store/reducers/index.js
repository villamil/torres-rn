import { combineReducers } from "redux";

import systemReducer from "./systemReducer";
import singUp from "./signUp.reducer";

const rootReducer = combineReducers({
  systemReducer,
  singUp
});

export default rootReducer;
