import { CLOSE_DIALOG_EDIT, OPEN_DIALOG_EDIT } from '../../actions/actionsTypes';

const initialState = {
  status: false,
  titleByDefault: '',
  descriptionByDefault: false, 
  keyEditedTask: null,
};

export function dialogEdit( prevState = initialState, typeAction ) {
  const { type, title='', description='', keyEditedTask } = typeAction;

  switch (type) {
    case OPEN_DIALOG_EDIT: {
      return {
        titleByDefault: title,
        status: true,
        descriptionByDefault: description,
        keyEditedTask,
      };
    }
    case CLOSE_DIALOG_EDIT: {
      return {
        titleByDefault: '',
        status: false,
        descriptionByDefault: '',
        keyEditedTask:null,
      };
    }
    default: {
      return prevState;
    }
  }
}
