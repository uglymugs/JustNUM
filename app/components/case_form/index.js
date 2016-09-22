import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import Divider from 'material-ui/Divider';
// validator function specific to the form that you have to write
import validate from '../../form_validators/case_form_validator';

import CaseCheckboxes from './case_checkboxes';
import CaseTextFields from './case_text_fields';
import CaseContacts from './case_contacts';
import CaseTimeline from './case_timeline';
import CaseNotesCreate from './case_notes_create';
import FormButton from '../material_ui_form_lib/form_button';


const formWrapper = {
  width: '100%',
  maxWidth: '900px',
  minWidth: '300px',
  backgroundColor: '#F6F7FA',
  display: 'flex',
  justifyContent: 'center',
};

const addCase = (values, dispatch) =>
  console.log('values: ', values, dispatch);

const CaseForm = ({ handleSubmit, pristine, reset, submitting }) =>
  <div style={formWrapper}>
    <form onSubmit={handleSubmit(addCase)} style={{ width: '100%' }}>
      <CaseCheckboxes />
      <Divider />
      <CaseTextFields />
      <Divider />
      <CaseContacts />
      <Divider />
      <CaseTimeline />
      <Divider />
      <CaseNotesCreate />
      <FormButton label="Submit" disabled={pristine || submitting} type="submit" />
      <FormButton label="Reset" disabled={pristine || submitting} onClick={reset} />
    </form>
  </div>;

CaseForm.propTypes = {
  handleSubmit: PropTypes.any,
  reset: PropTypes.any,
  pristine: PropTypes.any,
  submitting: PropTypes.any,
};

export default reduxForm({
  form: 'CaseForm',  // a unique identifier for this form
  validate,
})(CaseForm);
