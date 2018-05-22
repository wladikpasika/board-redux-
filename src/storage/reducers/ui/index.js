import { combineReducers } from 'redux';

import { confirmAlert } from './confirmAlert';
import { dialogAdd } from './dialogAdd';
import { dialogEdit } from './dialogEdit';

export const ui = combineReducers({
  confirmAlert,
  dialogAdd,
  dialogEdit,
});