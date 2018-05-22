import {
    ADD_TODO,
    UPLOAD_TODO_FROM_LOCAL_STORAGE,
    REMOVE_TODO,
    EDIT_TODO,
    EDIT_STATUS,
 } from '../actionsTypes';


export const addTodo = (task) => {
    return { type: ADD_TODO, task }
  };

export const uploadTodoFromLocalStorage = (tasks) => {
     return { type: UPLOAD_TODO_FROM_LOCAL_STORAGE, tasks }
 };

export const removeTodo = (key) => {
     return { type: REMOVE_TODO, key }
 };

export const editTodo = ( title, description, keyEditedTask ) => {
    return { type: EDIT_TODO, title, description, keyEditedTask }
};

export const editStatus = ( newStatus, keyEditedStatus ) => {
    console.log( newStatus, keyEditedStatus );
    return { type: EDIT_STATUS, newStatus, keyEditedStatus }
};