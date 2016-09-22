import React from 'react';
import { Field } from 'redux-form';
import TextField from '../material_ui_form_lib/text_field';

const CaseIdFields = () =>
  <div className="CaseIdFields">
    <div>
      <Field name="caseCaseId" component={TextField} label="Case ID" />
    </div>
  </div>;

export default CaseIdFields;
