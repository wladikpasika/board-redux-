import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

import AddTask from './components/PromptDialogAdd';
import EditeTask from './components/PrompDialogEdit';
import List from './List';
import AlertDeleteConfirm from './components/AlertDeleteConfirm';
import handleStorage from './LocalStorage/storageUpdate';
import storageCheck from './LocalStorage/storageCheck';
import { connect } from 'react-redux';

import { 
  addTodo, 
  removeTodo,
  setSearchValue,
  updateFilteredTasks,
  clearSearchValue, 
  editTodo,
  editStatus, 
  closeDialogAdd,
  openDialogAdd,
  openDialogEdit,
  closeDialogEdit,
  openAlertToConfirm,
  closeAlertToConfirm,
  uploadTodoFromLocalStorage,
} from './storage/actions/';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const styles = {
  headerColumn: {
    textAligth: "center !important",
  }
}

class Root extends Component {

  iterator = 0;
  handleAddItem = (values = {}) => {
    const { tasks } = this.props;
    const { title, description } = values;
    this.props.onAddTask({title, description});
  }

  handleUpdateFilteretedTasks(searchValue = '', tasks) {
    let newFilteredTasks = {};

    Object.keys(tasks).filter(propName => (
      tasks[propName].title.toLowerCase().includes(searchValue.toLowerCase()) !== false ||
      tasks[propName].description.toLowerCase().includes(searchValue.toLowerCase()) !== false
    )).forEach(propName => newFilteredTasks[propName] = tasks[propName]);

    return newFilteredTasks;
  }

  handleAddItemCheck = (values) => {
    const { title, description } = values;

    if ( title && title.trim()) {
        this.handleAddItem(values);
      }
    this.setState({ isAddPrompt: false });
  }

  handleRemoveItem = () => {
    const keyDeletedTask = this.props.keyDeletedTask;
    this.props.onRemoveTask(keyDeletedTask)
  }

  handleAddDialogCall = () => {
    this.props.onOpenDialogAdd();
  }

  handleAddDialogClose = () => {
    this.props.onCloseDialogAdd();
  }

  handleAlertConfirm = (key) => {
    if (key) {
      this.props.onAlertConfirmOpen(key);
    }
    else {
      this.props.onAlertConfirmClose();
    }
}

  allowDeletePermission = () => {
    this.handleRemoveItem();
    this.handleAlertConfirm();
  }

  handleEditDialogCall = (values = {}) => {
    const { title, description, key } = values;
    this.props.onOpenDialogEdit(title, description, key);
  };

  handleEditDialogClose = () => {
    this.props.onCloseDialogEdit();
  }

  handleEditTask = (values) => {
    const { title, description } = values;
    const { keyEditedTask } = this.props;

    if (title && title.trim()) {
      this.props.onEditTask(title, description, keyEditedTask );
    }

  }

  handleSearchInput = (value) => {
    const { tasks, onSearchInput } = this.props;
    onSearchInput(value);
  }

  handleClearSearchInput = () => {
    const { onClearSearchInput } = this.props;
    onClearSearchInput();
  }

  handleMove = (status, key) => {
    this.props.onEditStatus(status, key);
  }

  componentDidMount() {
    const cashedTasks = storageCheck();
    const { uploadTasksFromLocalStorage } = this.props;

    if (cashedTasks) {
      uploadTasksFromLocalStorage(cashedTasks);
    }
  }

  componentDidUpdate(prevProps) {
    const { searchValue, tasks, onUpdateFilteredTasks } = this.props;
    const copyTasks = { ...tasks };

    if (prevProps.tasks !== tasks) {
      handleStorage(tasks);
      onUpdateFilteredTasks(tasks);
    }
    else if (searchValue !== prevProps.searchValue) { 
      const newFilteredTasks = this.handleUpdateFilteretedTasks(searchValue, tasks);
      onUpdateFilteredTasks(newFilteredTasks);
    }
  }

  render() {
  
    const { 
      confirmAlert, 
      dialogAdd, 
      keyDeletedTask, 
      filteredTasks, 
      dialogEdit, 
      titleByDefaultEditedTask, 
      descriptionByDefaultEditedTask
     } = this.props;

    const TableExampleSimple = () => (
      <Table
        selectable={false}
      >
        <TableHeader
          selectable={false}
          displaySelectAll={false}
        >
          <TableRow selectable={false} >
            <TableHeaderColumn style={styles.headerColumn}>Todo</TableHeaderColumn>
            <TableHeaderColumn style={styles.headerColumn}>In Progress</TableHeaderColumn>
            <TableHeaderColumn style={styles.headerColumn}>Done</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          <TableRow>
            <TableRowColumn><List
              tasks={ filteredTasks }
              onAlertConfirm={this.handleAlertConfirm}
              onEdit={this.handleEditDialogCall}
              status="todo"
              onMove={this.handleMove}
            /></TableRowColumn>
            <TableRowColumn><List
              tasks={ filteredTasks }
              onAlertConfirm={this.handleAlertConfirm}
              onEdit={this.handleEditDialogCall}
              status="inProgress"
              onMove={this.handleMove}
            /></TableRowColumn>
            <TableRowColumn><List
              tasks={ filteredTasks }
              onAlertConfirm={this.handleAlertConfirm}
              onEdit={this.handleEditDialogCall}
              status="done"
              onMove={this.handleMove}
            /></TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    );

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <Fragment>
          <AddTask
            open={ dialogAdd } 
            closeDialog={this.handleAddDialogClose}
            onAddTask={this.handleAddItemCheck}
          />
          <EditeTask
            open={ dialogEdit }
            onClose={ this.handleEditDialogClose }
            onEdit={ this.handleEditTask }
            keyEditedTask = {this.props.keyEditedTask}
            defaultValueTitle={ titleByDefaultEditedTask }
            defaultValueDescription={ descriptionByDefaultEditedTask }
          />
          <AlertDeleteConfirm
            open={ confirmAlert }
            onAlertConfirm={this.handleAlertConfirm}
            allowDeletePermission={this.allowDeletePermission}
            deletedTask={ keyDeletedTask ? filteredTasks[keyDeletedTask].title : null }
          />
          <Header
            callDialog={this.handleAddDialogCall}
            onSearch={this.handleSearchInput}
            onClear={this.handleClearSearchInput}
            searchValue={this.props.searchValue}
          />
          <TableExampleSimple />
        </Fragment>
      </MuiThemeProvider>
    );
  }
}

const mapStatetoProps = state => (
  {
    tasks: state.tasks,
    keyDeletedTask: state.ui.confirmAlert.key,
    confirmAlert: state.ui.confirmAlert.status,
    searchValue: state.searchValue,
    dialogAdd: state.ui.dialogAdd,
    filteredTasks: state.filteredTasks,
    dialogEdit: state.ui.dialogEdit.status,
    keyEditedTask: state.ui.dialogEdit.keyEditedTask,
    titleByDefaultEditedTask: state.ui.dialogEdit.titleByDefault,
    descriptionByDefaultEditedTask: state.ui.dialogEdit.descriptionByDefault,
  } 
);

const mapDispathToProps = dispatch => (
  {
    onAddTask:(task) => dispatch( addTodo(task) ),
    onRemoveTask:(key) => dispatch( removeTodo(key) ),
    onAlertConfirmOpen: (key) => dispatch( openAlertToConfirm(key)),
    onAlertConfirmClose: () => dispatch( closeAlertToConfirm()),
    uploadTasksFromLocalStorage: (tasks) => dispatch( uploadTodoFromLocalStorage (tasks)),
    onSearchInput: (value) => dispatch( setSearchValue(value)),
    onCloseDialogAdd: () => dispatch( closeDialogAdd() ),
    onOpenDialogAdd: () => dispatch( openDialogAdd() ),
    onCloseDialogEdit: () => dispatch( closeDialogEdit() ),
    onOpenDialogEdit: (title, description, key) => dispatch( openDialogEdit(title, description, key) ), 
    onUpdateFilteredTasks: (tasks) => dispatch( updateFilteredTasks(tasks) ),
    onClearSearchInput: () => dispatch( clearSearchValue() ),
    onEditTask: ( title, description, keyEditedTask ) => dispatch( editTodo( title, description, keyEditedTask )),
    onEditStatus: ( newStatus, keyEditedStatus ) => dispatch( editStatus( newStatus, keyEditedStatus )),
  }
);
  
export default connect( mapStatetoProps, mapDispathToProps )(Root);