import { combineReducers } from "redux";
import AmountReducer from "./AmountReducer"; //import all reducers to combine


const reducers = combineReducers({
    amount: AmountReducer
})

export default reducers