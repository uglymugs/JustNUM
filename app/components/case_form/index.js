import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';

// validator function specific to the form that you have to write
import validate from '../../form_validators/case_form_validator';

import CaseCheckboxes from './case_checkboxes';
import CaseTextFields from './case_text_fields';
import CaseContacts from './case_contacts';
import CaseTimeline from './case_timeline';
import CaseNotesCreate from './case_notes_create';

const CaseForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <div style={{ backgroundColor: 'red', width: '100%', maxWidth: '500px' }}>
      <form onSubmit={handleSubmit}>
        <CaseCheckboxes />
        <CaseTextFields />
        <CaseContacts />
        <CaseTimeline />
        <CaseNotesCreate />
        <div>
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
