import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
// import logger from './logs/logger'
import rootSaga from "./sagas";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
const sagaMiddleware = createSagaMiddleware();
const middleware = [logger, sagaMiddleware]
const store = configureStore({
    reducer: rootReducer, 
    //! using middleware
    // middleware: [sagaMiddleware, logger]
    middleware: [...middleware]
});
sagaMiddleware.run(rootSaga)
export default store;