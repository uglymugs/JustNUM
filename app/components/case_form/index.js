import React, { Component, PropTypes } from 'react';
import { red500 } from 'material-ui/styles/colors';

import Divider from 'material-ui/Divider';
import CaseIdFields from './case_id_field';
import CaseCheckboxes from './case_checkboxes';
import CaseTextFields from './case_text_fields';
import CaseContacts from './case_contacts';
// import CaseTasks from './case_tasks';
// import CaseNotes from './case_notes';
import FormButton from '../material_ui_form_lib/form_button';

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
    const { view, fetchCase, caseId, clearCaseForm } = this.props;
    clearCaseForm();
    if (view === 'edit') fetchCase(caseId);
  }
  componentWillReceiveProps(nextProps) {
    const { view, clearCaseForm } = this.props;
    const nextView = nextProps.view;
    if (view === 'edit' && nextView === 'new') clearCaseForm();
  }
  render() {
    const { muiTheme, error, handleSubmit, pristine, submitting, reset } = this.props;
    const errorComponent = error ?
      <div
        style={{
          fontFamily: muiTheme.fontFamily,
          color: red500,
          marginTop: '30px',
        }}
      >
        {error}
        <br />
      </div> : undefined;
    return (
      <div style={formWrapper}>
        <form
          onSubmit={handleSubmit}
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
          { errorComponent }
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
  error: PropTypes.any,
  muiTheme: PropTypes.any,
  pristine: PropTypes.any,
  submitting: PropTypes.any,
  view: PropTypes.string.isRequired,
  fetchCase: PropTypes.func,
  clearCaseForm: PropTypes.func,
  caseId: PropTypes.string,
};

export default CaseForm;
