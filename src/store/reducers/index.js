import { combineReducers } from "redux";

import system from "./systemReducer";
import singUp from "./signUp.reducer";
import auth from "./auth.reducer";
import maintenance from "./maintenance.reducer";
import unit from "./unit.reducer";
import water from "./water.reducer";

const rootReducer = combineReducers({
  system,
  singUp,
  auth,
  maintenance,
  unit,
  water
});

export default rootReducer;
