import { combineReducers } from "redux";
import reducer from './reducer'

const rootRecucer = combineReducers({
    reducer:reducer,
})
export default rootRecucer;