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

const getInitialState = () => {
   const tasks = localStorage.getItem('tasks');

   return tasks ? JSON.parse(tasks) : {};
}

const saveToStorage = (tasks) => {
   localStorage.setItem('tasks', JSON.stringify(tasks));
};

const tasks = produce((draft = getInitialState(), action) => {
   const {type, id, text, done} = action;

   switch(type) {
      case ADD_TASK:
         draft[id] = {id, text, done};
         saveToStorage(draft);
         break;
      case COMPLETE_TASK:
         draft[id].done = done;
         saveToStorage(draft);
         break;
      case DELETE_TASK:
         delete draft[id];
         saveToStorage(draft);
         break;
      case EDIT_TASK:
         draft[id].text = text;
         saveToStorage(draft);
         break;
      default:
         return draft;
   }
});

export default tasks;
