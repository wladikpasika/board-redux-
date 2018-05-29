import {
    ADD_TODO,
    UPLOAD_TODO_FROM_LOCAL_STORAGE,
    REMOVE_TODO,
    EDIT_TODO,
    EDIT_STATUS,
    UPLOAD_CASHED_TASKS,
 } from '../actionsTypes';

export const addTodo = (task, keyForTask) => {
    return { type: ADD_TODO, task, keyForTask }
  };

export const uploadTodoFromLocalStorage = ( tasks ) => {
     return { type: UPLOAD_TODO_FROM_LOCAL_STORAGE, tasks }
 };

export const removeTodo = ( key ) => {
     return { type: REMOVE_TODO, key }
 };

export const editTodo = ( title, description, keyEditedTask ) => {
    return { type: EDIT_TODO, title, description, keyEditedTask }
};

export const editStatus = ( newStatus, keyEditedStatus ) => {
    return { type: EDIT_STATUS, newStatus, keyEditedStatus }
};

export const uploadCashedTasks = ( cashedTasks ) => {
    return { type: UPLOAD_CASHED_TASKS, cashedTasks }
};
