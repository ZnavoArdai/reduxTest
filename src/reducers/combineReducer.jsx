import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { counterReducer } from "./counterReducer";

export const reducers = combineReducers({ 
    
    user:userReducer,
    count: counterReducer });
 