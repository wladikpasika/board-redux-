import { takeEvery, put } from 'redux-saga/effects';

import { putTasksHandler } from '../../indexedDb';
import { ADD_TODO } from '../actions/actionsTypes';

function* handleAdd(action = {}) {
    const { task = {}, keyForTask } = action;
    putTasksHandler( {[keyForTask]: task} );
}

export function* indexedDB() {
    yield takeEvery( ADD_TODO, handleAdd );
}