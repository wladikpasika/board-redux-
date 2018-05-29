import {
    UPDATE_FILTERED_TASKS
 } from '../actionsTypes';

export const updateFilteredTasks = (tasks) => {
    return { type: UPDATE_FILTERED_TASKS, tasks }
  };
