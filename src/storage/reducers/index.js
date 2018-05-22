import { combineReducers } from 'redux';

import { tasks } from './logic/tasks';
import { filteredTasks } from './logic/filteredTasks';
import { ui } from './ui';
import { searchValue } from './logic/search'

export const reducers = combineReducers({
  tasks,
  ui,
  searchValue,
  filteredTasks,
  
});