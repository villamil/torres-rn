import AsyncStorage from "@react-native-community/async-storage";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import wsMiddleware from "./middleware";

import rootReducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware, wsMiddleware];

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["auth", "unit", "maintenance", "water"],
  blacklist: ["system", "signUp"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(...middleware));

let persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
