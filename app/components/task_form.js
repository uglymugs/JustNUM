import React, { PropTypes } from 'react';
import { Field } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import { renderTextField } from './material_ui_form_lib';


const style = {
  textField: {
  },
  addTask: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  button: {
    width: '100px',
    marginBottom: '8px',
    marginLeft: '20px',
  },
};

const TaskForm = ({ handleSubmit }) =>
  <form
    style={style.addTask}
    onSubmit={handleSubmit}
  >
    <Field
      name="taskName"
      component={renderTextField}
      label="Task"
      multiLine
      rows={1}
      style={style.textField}
    />
    <Field
      name="taskDate"
      component={renderTextField}
      label="Due date"
    />
    <RaisedButton
      label="Add task"
      primary
      type="submit"
      style={style.button}
    />
  </form>;


TaskForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default TaskForm;