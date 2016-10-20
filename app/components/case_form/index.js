import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';

import Divider from 'material-ui/Divider';
import CaseIdFields from './case_id_field';
import CaseCheckboxes from './case_checkboxes';
import CaseTextFields from './case_text_fields';
import CaseContacts from './case_contacts';
// import CaseTasks from './case_tasks';
// import CaseNotes from './case_notes';
import FormButton from '../material_ui_form_lib/form_button';

// import validate from './form_validators';

const formWrapper = {
  width: '100%',
  maxWidth: '900px',
  minWidth: '300px',
  backgroundColor: '#F6F7FA',
  display: 'flex',
  justifyContent: 'center',
};


class CaseForm extends Component {
  componentDidMount() {
    const { fetchCase, caseId } = this.props;
    fetchCase(caseId);
  }
  render() {
    const { handleSubmit, submitHandler, pristine, submitting, reset } = this.props;
    return (
      <div style={formWrapper}>
        <form
          onSubmit={handleSubmit(submitHandler)}
          style={{ width: '100%' }}
        >
          <CaseIdFields />
          <Divider />
          <CaseCheckboxes />
          <Divider />
          <CaseTextFields />
          <CaseContacts />
          { /* <CaseTasks /> */ }
          { /* <CaseNotes /> */ }
          <FormButton
            className="Case__button"
            label="Submit"
            disabled={pristine || submitting}
            type="submit"
          />
          <FormButton
            className="Case__button"
            label="Reset"
            disabled={pristine || submitting}
            onClick={reset}
          />
        </form>
      </div>
    );
  }
}

CaseForm.propTypes = {
  handleSubmit: PropTypes.any,
  reset: PropTypes.any,
  pristine: PropTypes.any,
  submitting: PropTypes.any,
  view: PropTypes.string.isRequired,
  submitHandler: PropTypes.func,
  fetchCase: PropTypes.func,
  caseId: PropTypes.string,
};

export default reduxForm({
  form: 'CaseForm',
  // validate,
})(CaseForm);
