import { applyMiddleware, createStore } from "redux";
import rootRecucer from './crud/Reducres/index'
import thunk from "redux-thunk";



const store = createStore(rootRecucer,applyMiddleware(thunk))
export default store;