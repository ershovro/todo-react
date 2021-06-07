import {combineReducers} from 'redux';
import tasks from './tasks';
import sort from './sort';

export default combineReducers({tasks, sort});
