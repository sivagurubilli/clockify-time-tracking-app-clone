

import {
    legacy_createStore,
    combineReducers,
    applyMiddleware,
} from "redux";

import thunk from "redux-thunk"
import {taskreducer as taskreducer1} from "./tasktimereducer/reducer"

const rootreducer = combineReducers({taskreducer1})

export const store = legacy_createStore(rootreducer,applyMiddleware(thunk))