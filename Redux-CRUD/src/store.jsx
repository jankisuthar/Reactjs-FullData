import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootreducer from './Reducres/index'
const store = createStore(rootreducer,applyMiddleware(thunk));
export default store;