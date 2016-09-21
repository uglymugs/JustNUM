import React from 'react';
import { Field } from 'redux-form';
import { renderTextField } from '../material_ui_form_lib/index';

const CaseTextFields = () =>
  <div className="CaseTextFields">
    <div>
      <Field name="CaseTextFields__referral" component={renderTextField} label="Referral" />
    </div>
    <div>
      <Field name="CaseTextFields__area" component={renderTextField} label="Area" />
    </div>
    <div>
      <Field name="CaseTextFields__operation" component={renderTextField} label="Operation" />
    </div>
  </div>;

export default CaseTextFields;
