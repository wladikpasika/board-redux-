import { UPDATE_FILTERED_TASKS  } from '../../actions/actionsTypes';

  export function filteredTasks(prevState = {}, action) {
    const { 
        type = '',  
        tasks = {}, 
    } = action;
  
    switch (type) {
      case UPDATE_FILTERED_TASKS: {
        return {...tasks};
      }
      default: {
        return prevState;
      }
    }
  }