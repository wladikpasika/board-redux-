import { 
    OPEN_ALERT_TO_CONFIRM, 
    CLOSE_ALERT_TO_CONFIRM,
} from '../../actions/actionsTypes';

export function confirmAlert ( prevState = {status:false, key: null}, typeAction ) {
  const { type, key } = typeAction; 
  
  switch (type) {
    case OPEN_ALERT_TO_CONFIRM: {
      return { status: true, key };
    }
    case CLOSE_ALERT_TO_CONFIRM: {
        return { status: false, key: null };
    }
    default: {
      return prevState;
    }
    
  }
}