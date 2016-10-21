import React, { Component, PropTypes } from 'react';
import { reduxForm, Field } from 'redux-form';
import { renderTextField } from '../material_ui_form_lib';
import CaseCheckboxes from './case_checkboxes';
import FormButton from '../material_ui_form_lib/form_button';
// import TaskList from '../task_list';

import validate from './validate';


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
    const { fetchCase, caseId } = this.props;
    fetchCase(caseId);
  }

  render() {
    const { handleSubmit, submitHandler, pristine, submitting, reset } = this.props;
    return (
      <div>
        <form
          onSubmit={handleSubmit(submitHandler)}
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
        <div>
          {/* <TaskList /> */}
        </div>
      </div>
    );
  }
}

CaseForm.propTypes = {
  handleSubmit: PropTypes.func,
  reset: PropTypes.func,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  view: PropTypes.string.isRequired,
  submitHandler: PropTypes.func,
  fetchCase: PropTypes.func,
  caseId: PropTypes.string,
};

export default reduxForm({
  form: 'CaseForm',
  validate,
})(CaseForm);
