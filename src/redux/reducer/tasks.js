import {ADD_TASK} from '../constants';
import produce from 'immer';

const initialState = {
   1: {
      id: '1',
      text: 'to do',
      done: false
   }
};


const tasks = produce((draft = initialState, action) => {
   const {type, id, text, done} = action;

   switch(type) {
      case ADD_TASK:
         draft[id] = {id, text, done};
         break;
      default:
         return draft;
   }
});

export default tasks;
