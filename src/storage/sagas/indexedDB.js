import { takeEvery, put } from 'redux-saga/effects';

import { putTasksHandler, removeTasksHandler, editStatusHandler, editTaskHandler } from '../../indexedDb';
import { ADD_TODO, REMOVE_TODO, EDIT_TODO, EDIT_STATUS } from '../actions/actionsTypes';

function* handleAdd(action = {}) {
    const { task = {}, keyForTask } = action;
    
    putTasksHandler( {[keyForTask]: task} );
};

function* handleRemove(action = {}) {
    const { key } = action;
    removeTasksHandler( key );
};

function* handleEditStatus (action = {}) {
    const { newStatus, keyEditedStatus } = action;
    editStatusHandler( newStatus, keyEditedStatus );
};

function* handleEdit (action = {}) {
    const { title, description, keyEditedTask } = action;
    console.log ( title, description, keyEditedTask );
    editTaskHandler( title, description, keyEditedTask );
};

export function* indexedDB() {
    yield takeEvery( ADD_TODO, handleAdd ) //add
    yield takeEvery( REMOVE_TODO, handleRemove )
    yield takeEvery( EDIT_STATUS, handleEditStatus )
    yield takeEvery( EDIT_TODO, handleEdit )
};