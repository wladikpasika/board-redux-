export {
    addTodo,
    removeTodo,
    uploadTodoFromLocalStorage,
    editTodo,
    editStatus,
} from './logic/tasks';

export {
    openAlertToConfirm,
    closeAlertToConfirm,
} from './ui/alerts'

export {
    setSearchValue,
    clearSearchValue 
} from './logic/search';

export {
    openDialogAdd,
    closeDialogAdd,
    openDialogEdit,
    closeDialogEdit
 } from './ui/dialogs';

 export {
     updateFilteredTasks,
 } from './logic/filteredTasks';