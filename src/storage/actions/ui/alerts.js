import {
    OPEN_ALERT_TO_CONFIRM,
    CLOSE_ALERT_TO_CONFIRM,
    SET_KEY_TO_DELETE,
    REMOVE_KEY_TO_DELETE,
  } from '../actionsTypes'
  
  export const openAlertToConfirm = (key) => {
    return { type: OPEN_ALERT_TO_CONFIRM, key }
  };
  
  export const closeAlertToConfirm = () => {
    return { type: CLOSE_ALERT_TO_CONFIRM }
  };
  