import { applyMiddleware, combineReducers, legacy_createStore } from "redux";

import { reducer as authReducer } from "./Authenticate/reducer"
import { reducer as forumReducer } from "./Forum/reducer"

import thunk from "redux-thunk";
const rootReducers = combineReducers({
    authReducer,
    forumReducer
})
export const store = legacy_createStore(rootReducers, applyMiddleware(thunk))