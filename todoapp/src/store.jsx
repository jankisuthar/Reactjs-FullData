import { applyMiddleware,combineReducers, createStore } from 'redux';
import MyData from './reducres/reducer';





const store = createStore(combineReducers({
    listdata : MyData,
   
}));
export default store;