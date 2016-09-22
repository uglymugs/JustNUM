import React from 'react';
import { Field } from 'redux-form';
import TextField from '../material_ui_form_lib/text_field';

const CaseTextFields = () =>
  <div className="CaseTextFields">
    <div>
      <Field name="caseReferral" component={TextField} label="Referral" />
    </div>
    <div>
      <Field name="caseArea" component={TextField} label="Area" />
    </div>
    <div>
      <Field name="caseOperation" component={TextField} label="Operation" />
    </div>
  </div>;

export default CaseTextFields;
