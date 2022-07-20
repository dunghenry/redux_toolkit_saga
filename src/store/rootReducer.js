import { combineReducers } from "redux";
import userReducer from "./slices/userSlice";
const rootReducer = combineReducers({
    user: userReducer,
})

export default rootReducer;