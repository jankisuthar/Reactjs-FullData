import { createStore } from 'redux';
import rootReducer from './Reducres/index';


const Store = createStore(rootReducer);
export default Store;