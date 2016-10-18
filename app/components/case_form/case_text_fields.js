import React from 'react';
import { Field } from 'redux-form';
import TextField from '../material_ui_form_lib/text_field';

const CaseTextFields = () =>
  <div className="CaseTextFields">
    <div>
      <Field name="referral" component={TextField} label="Referral" />
    </div>
    <div>
      <Field name="area" component={TextField} label="Area" />
    </div>
    <div>
      <Field name="operation" component={TextField} label="Operation" />
    </div>
  </div>;

export default CaseTextFields;
