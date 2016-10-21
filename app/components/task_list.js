import React from 'react';
import { Field } from 'redux-form';
import { renderTextField, renderDatePicker } from './material_ui_form_lib';
import FormButton from './material_ui_form_lib/form_button';


const style = {
  textField: {
  },
  addTask: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    // border: '1px solid red',
  },
  button: {
    marginBottom: '8px',
    marginLeft: '20px',
  },
};

const TaskList = () =>
  <div style={style.addTask}>
    <Field
      name="taskName"
      component={renderTextField}
      label="Task"
      fullWidth
      multiLine
      rows={1}
      style={style.textField}
    />
    <Field
      name="taskDate"
      component={renderDatePicker}
      label="Due date"
    />
    <FormButton
      label="Add"
      type="submit"
      style={style.button}
    />
  </div>;

export default TaskList;
