import {createSelector} from 'reselect';


const tasksSelector = (state) => state.tasks;
const sortSelector = (state) => state.sort;

export const tasksListSelector = createSelector(
   tasksSelector,
   Object.values
);
