import React, { PropTypes } from 'react';
import { Field } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import { renderTextField, renderSelectField } from './material_ui_form_lib';


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

const formLabel = formType => {
  switch (formType) {
    case 'edit':
      return 'Edit Task';
    case 'add':
    default:
      return 'Add Task';
  }
};

const TaskForm = ({ handleSubmit, formType }) =>
  <form
    style={style.addTask}
    onSubmit={handleSubmit}
  >
    <Field
      name="description"
      component={renderTextField}
      label="Task description"
      multiLine
      rows={1}
      style={style.textField}
    />
    <Field
      name="deadline"
      component={renderTextField}
      label="Deadline (DD/MM/YY )"
    />

    <Field name="status" component={renderSelectField} label="Status">
      <MenuItem value="todo" primaryText="To do" />
      <MenuItem value="pending" primaryText="Pending" />
      <MenuItem value="done" primaryText="Done" />
    </Field>

    <RaisedButton
      label={formLabel(formType)}
      primary={formType === 'add'}
      secondary={formType === 'edit'}
      type="submit"
      style={style.button}
    />
  </form>;

TaskForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  formType: PropTypes.string.isRequired,
};

export default TaskForm;
