import { all, fork } from "redux-saga/effects";
import { signUpSaga } from "./signUp.saga";
import { authSaga } from "./auth.saga";
import { unitSaga } from "./unit.saga";
import { maintenanceSaga } from "./maintenance.saga";
import { waterSaga } from "./water.saga";

export default function* rootSagas() {
  yield all([
    fork(signUpSaga),
    fork(authSaga),
    fork(unitSaga),
    fork(maintenanceSaga),
    fork(waterSaga)
  ]);
}
