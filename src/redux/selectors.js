import {createSelector} from 'reselect';
import {sortByReverseOrderTitle} from './utils';

const tasksSelector = (state) => state.tasks;

export const tasksListSelector = createSelector(
   tasksSelector,
   (tasks) => {
      return sortByReverseOrderTitle(Object.values(tasks));
   }

);
