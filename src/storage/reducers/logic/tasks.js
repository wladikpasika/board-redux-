import { 
    ADD_TODO, 
    REMOVE_TODO, 
    REMOVE_TODOS, 
    EDIT_TODO,
    EDIT_STATUS, 
    UPLOAD_TODO_FROM_LOCAL_STORAGE
} from '../../actions/actionsTypes';

  export function tasks(prevState = {}, action) {
    const { 
        type = '',
        keyForTask, 
        keyEditedTask = 0, 
        key = null, 
        tasks = {}, 
        task = {},
        status = 'todo',
        title = '',
        description = '',
        newStatus,
        keyEditedStatus,
    } = action;
    
    switch (type) {
      case ADD_TODO: {
        const newTasks = { ...prevState, [keyForTask]: task };
        return newTasks;
      }

      case EDIT_TODO: { ///edit only title & description, edit status is lower
        const newTasks = {...prevState};  
        newTasks[keyEditedTask].title = title;
        newTasks[keyEditedTask].description = description;
        return newTasks; 
      }

      case REMOVE_TODO: {
        const newTasks = {...prevState};
        delete newTasks[key];
        return newTasks;
      }

      case EDIT_STATUS: {
        const newTasks = {...prevState};  
        newTasks[keyEditedStatus].status = newStatus;
        return newTasks;
      }

      /*case  UPLOAD_TODO_FROM_LOCAL_STORAGE: {
        const newTasks = {...tasks};
        const keyArray = Object.keys(newTasks);
        keyIterator = 
      keyArray.length
      ?Math.max.apply(null, keyArray) + 1
      :null;   
      return newTasks;
      }*/
      default: {
        return prevState;
      }
    }
  }