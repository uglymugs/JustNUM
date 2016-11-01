import React, { PropTypes } from 'react';
import { Field } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import { renderTextField } from './material_ui_form_lib';


const style = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '100%',
  },
  note: {
    flexGrow: 1,
    width: '100%',
    paddingRight: 10,
    paddingLeft: 10,
  },
  button: {
    width: '100px',
    marginTop: 10,
    display: 'flex',
    justifyContent: 'flex-end',
  },
};


const NoteForm = ({ handleSubmit }) =>
  <form
    style={style.form}
    onSubmit={handleSubmit}
  >
    <div style={style.note}>
      <Field
        name="text"
        component={renderTextField}
        label="Note"
        multiLine
        rows={1}
        fullWidth
      />
    </div>

    <div style={style.button}>
      <RaisedButton
        label="Add note"
        primary
        type="submit"
        style={style.button}
      />
    </div>
  </form>;

NoteForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default NoteForm;
