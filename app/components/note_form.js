import React, { PropTypes } from 'react';
import { Field } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import { renderTextField } from './material_ui_form_lib';


const style = {
  textField: {
  },
  addNote: {
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


const NoteForm = ({ handleSubmit }) =>
  <form
    style={style.addNote}
    onSubmit={handleSubmit}
  >
    <Field
      name="text"
      component={renderTextField}
      label="Note"
      multiLine
      rows={1}
      style={style.textField}
    />

    <RaisedButton
      label="Add note"
      primary
      type="submit"
      style={style.button}
    />
  </form>;

NoteForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default NoteForm;
