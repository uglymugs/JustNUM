import React from 'react';
import { Field } from 'redux-form';
import { renderTextField } from '../material_ui_form_lib/index';

const CaseTextFields = () =>
  <div className="case_text_fields">
    <div>
      <Field name="referral" component={renderTextField} label="Referral" />
    </div>
    <div>
      <Field name="area" component={renderTextField} label="Area" />
    </div>
    <div>
      <Field name="operation" component={renderTextField} label="Operation" />
    </div>
  </div>;

export default CaseTextFields;
