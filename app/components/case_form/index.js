import React, { Component, PropTypes } from 'react';
import { Field } from 'redux-form';
import { red500 } from 'material-ui/styles/colors';
import { renderTextField } from '../material_ui_form_lib';
import CaseCheckboxes from './case_checkboxes';
import FormButton from '../material_ui_form_lib/form_button';
import CaseTaskNotesManager from '../case_task_notes_manager';


const style = {
  form: {
    width: '100%',
    minWidth: '900px',
    backgroundColor: '#F6F7FA',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  textField: {
    width: '500px',
  },
  button: {
    marginTop: '50px',
  },
  checklist: {
    display: 'flex',
  },
  checkboxes: {
    flexGrow: 1,
  },
  listItems: {
    width: 250,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
};


class CaseForm extends Component {
  componentDidMount() {
    const { view, fetchCase, caseRef, clearCaseForm } = this.props;
    clearCaseForm();
    if (view === 'edit') fetchCase(caseRef);
  }
  componentWillReceiveProps(nextProps) {
    const { view, clearCaseForm } = this.props;
    const nextView = nextProps.view;
    if (view === 'edit' && nextView === 'new') clearCaseForm();
  }

  render() {
    const { caseRef, view, muiTheme, error,
      handleSubmit, pristine, submitting, reset } = this.props;

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
    const caseIDComponent = (view !== 'new') ?
      <div style={{ fontSize: '1.2em', fontFamily: 'Roboto' }}>
        { `Case ID: ${caseRef}` }
      </div> : <Field
        name="caseRef"
        component={renderTextField}
        label="Case ID"
        style={style.textField}
      />;

    return (
      <div>
        <form
          onSubmit={handleSubmit}
          style={style.form}
        >
          {caseIDComponent}
          <div style={style.checklist}>
            <div style={style.checkboxes}>
              <CaseCheckboxes />
            </div>
            <div style={style.listItems}>
              <Field
                name="referral"
                component={renderTextField}
                label="Referral"
                fullWidth
              />

              <Field
                name="area"
                component={renderTextField}
                label="Area"
                fullWidth
              />

              <Field
                name="operation"
                component={renderTextField}
                label="Operation"
                fullWidth
              />
            </div>
          </div>

          <Field
            name="contacts"
            component={renderTextField}
            label="Contacts"
            multiLine
            rows={4}
            style={style.textField}
          />

          <div style={style.button}>
            <FormButton
              label="Submit"
              disabled={pristine || submitting}
              type="submit"
              style={{ marginRight: '20px' }}
            />
            <FormButton
              label="Reset"
              disabled={pristine || submitting}
              onClick={reset}
            />
          </div>
        </form>
        { errorComponent }
        <br /><br /><br />
        <CaseTaskNotesManager />
      </div>
    );
  }
}

CaseForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  error: PropTypes.string,
  muiTheme: PropTypes.object.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  view: PropTypes.string.isRequired,
  fetchCase: PropTypes.func.isRequired,
  clearCaseForm: PropTypes.func.isRequired,
  caseRef: PropTypes.string,
};

export default CaseForm;
