import React from 'react';
import { Field } from 'redux-form';
import TextField from '../material_ui_form_lib/text_field';

const CaseIdFields = () =>
  <div className="CaseIdFields">
    <div>
      <Field name="CaseIdFields_id" component={TextField} label="Case Id" />
    </div>
  </div>;

export default CaseIdFields;
