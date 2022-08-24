

import {
    legacy_createStore,
    combineReducers,
    applyMiddleware,
} from "redux";

import thunk from "redux-thunk"
import {reducer as taskreducer} from "./tasktimereducer/reducer"

const rootreducer = combineReducers({tasks :taskreducer})

export const store = legacy_createStore(rootreducer,applyMiddleware(thunk))