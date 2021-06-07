import {
   ADD_TASK,
   EDIT_TASK,
   COMPLETE_TASK,
   DELETE_TASK,
   SORT_TASKS
} from './constants';

export const addTask = (text) => ({
   type: ADD_TASK,
   text
});

export const editTask = (id, text) => ({
   type: EDIT_TASK,
   id,
   text
});

export const completeTask = (id, value) => ({
   type: COMPLETE_TASK,
   id,
   done: value
});

export const deleteTask = (id) => ({
   type: DELETE_TASK,
   id
});

export const sortTask = (sort) => ({
   type: SORT_TASKS,
   sort
});

