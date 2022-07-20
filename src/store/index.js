import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import logger from './logs/logger'
import rootSaga from "./sagas";
// import logger from "redux-logger";
import rootReducer from "./rootReducer";
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: logger(rootReducer), 
    //! using middleware
    // middleware: [sagaMiddleware, logger]
    middleware: [sagaMiddleware]
});
sagaMiddleware.run(rootSaga)
export default store;