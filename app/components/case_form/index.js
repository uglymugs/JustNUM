import React, { Component, PropTypes } from 'react';
import { Field } from 'redux-form';
import { red500 } from 'material-ui/styles/colors';
import { renderTextField } from '../material_ui_form_lib';
import CaseCheckboxes from './case_checkboxes';
import FormButton from '../material_ui_form_lib/form_button';
import ConnectedCaseTaskList from '../../containers/connected_case_task_list';
import ConnectedNewTaskForm from '../../containers/connected_new_task_form';


const style = {
  form: {
    width: '100%',
    maxWidth: '900px',
    minWidth: '300px',
    backgroundColor: '#F6F7FA',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  textField: {
    width: '500px',
  },
  formButtons: {
    marginTop: '50px',
  },
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
      <div>
        <form
          onSubmit={handleSubmit}
          style={style.form}
        >
          <Field
            name="caseId"
            component={renderTextField}
            label="Case ID"
            style={style.textField}
          />

          <div style={{ display: 'flex' }}>
            <div style={{ width: '50%' }}>
              <CaseCheckboxes />
            </div>
            <div style={{ width: '50%', paddingLeft: '10px' }}>
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

          <div style={style.formButtons}>
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
        <div>
          <ConnectedNewTaskForm />
          <ConnectedCaseTaskList />
        </div>
      </div>
    );
  }
}

CaseForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  error: PropTypes.object,
  muiTheme: PropTypes.object.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  view: PropTypes.string.isRequired,
  fetchCase: PropTypes.func.isRequired,
  clearCaseForm: PropTypes.func.isRequired,
  caseId: PropTypes.string,
};

export default CaseForm;
