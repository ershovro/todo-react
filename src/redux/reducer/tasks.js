import {ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK} from '../constants';
import produce from 'immer';

/*const initialState = {
   id: {
      id,
      text,
      done
   }
};
*/

const tasks = produce((draft = {}, action) => {
   const {type, id, text, done} = action;

   switch(type) {
      case ADD_TASK:
         draft[id] = {id, text, done};
         break;
      case COMPLETE_TASK:
         draft[id].done = done;
         break;
      case DELETE_TASK:
         delete draft[id];
         break;
      case EDIT_TASK:
         draft[id].text = text;
         break;
      default:
         return draft;
   }
});

export default tasks;
