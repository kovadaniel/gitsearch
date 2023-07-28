import { combineReducers } from "@reduxjs/toolkit"
import usersReducer from "./usersReducer"
import singleUserReducer from "./singleUserReducer"

export const rootReducer = combineReducers({
    users: usersReducer,
    singleUser: singleUserReducer,
})
