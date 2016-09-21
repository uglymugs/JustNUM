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


const formWrapper = {
  width: '100%',
  height: '100%',
  maxWidth: '900px',
  minWidth: '500px',
  backgroundColor: '#F6F7FA',
  display: 'flex',
  justifyContent: 'center',
};

const CaseForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <div style={formWrapper}>
      <form onSubmit={handleSubmit}>
        <CaseCheckboxes />
        <Divider />
        <CaseTextFields />
        <Divider />
        <CaseContacts />
        <Divider />
        <CaseTimeline />
        <Divider />
        <CaseNotesCreate />
        <div className="CaseForm__buttons">
          <button type="submit" disabled={pristine || submitting}>Submit</button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values
          </button>
        </div>
      </form>
    </div>
  );
};

CaseForm.propTypes = {
  handleSubmit: PropTypes.function,
  reset: PropTypes.function,
  pristine: PropTypes.boolean,
  submitting: PropTypes.boolean,
};

export default reduxForm({
  form: 'CaseForm',  // a unique identifier for this form
  validate,
})(CaseForm);
