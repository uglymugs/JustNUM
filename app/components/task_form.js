import React, { PropTypes } from 'react';
import { Field } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import { renderTextField, renderSelectField } from './material_ui_form_lib';


const style = {
  form: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  description: {
    flexGrow: 1,
    paddingRight: '10px',
  },
  deadline: {
    minWidth: '50px',
    paddingRight: '10px',
  },
  status: {
    minWidth: '120px',
    paddingRight: '10px',
  },
  button: {
    width: '100px',
    marginBottom: '8px',
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
  (<form
    style={style.form}
    onSubmit={handleSubmit}
  >
    <div style={style.description}>
      <Field
        name="description"
        component={renderTextField}
        label="Task description"
        fullWidth
        multiLine
        rows={1}
      />
    </div>
    <div style={style.deadline}>
      <Field
        name="deadline"
        component={renderTextField}
        label="Deadline (DD/MM/YY )"
        fullWidth
      />
    </div>
    <div style={style.status}>
      <Field
        name="status"
        component={renderSelectField}
        label="Status"
        fullWidth
      >
        <MenuItem value="todo" primaryText="To do" />
        <MenuItem value="pending" primaryText="Pending" />
        <MenuItem value="done" primaryText="Done" />
      </Field>
    </div>

    <div style={style.button}>
      <RaisedButton
        label={formLabel(formType)}
        primary={formType === 'add'}
        secondary={formType === 'edit'}
        type="submit"
      />
    </div>
  </form>);

TaskForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  formType: PropTypes.string.isRequired,
};

export default TaskForm;
