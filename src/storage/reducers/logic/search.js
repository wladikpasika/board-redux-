import { SET_SEARCH_VALUE, CLEAR_SEARCH_VALUE  } from '../../actions/actionsTypes';

export function searchValue (prevState = '', action){
    const { type, searchValue } = action;

    switch(type){
        case SET_SEARCH_VALUE:{
          return searchValue;
        }
        case CLEAR_SEARCH_VALUE:{
          return '';
        }
        default: {
          return prevState;
        }
    }
}

