import {createStore, applyMiddleware} from 'redux';
import generateId from './middleware/generateId';
import reducer from './reducer';

export default createStore(reducer, applyMiddleware(generateId));
