import { combineReducers } from 'redux';

import { tasks } from './tasks/tasks';
import { filteredTasks } from './tasks/filteredTasks';
import { ui } from './ui';
import { searchValue } from './tasks/search'

export const reducers = combineReducers({
  tasks,
  ui,
  searchValue,
  filteredTasks,
});