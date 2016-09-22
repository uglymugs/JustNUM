import React from 'react';
import { Field } from 'redux-form';
import TextField from '../material_ui_form_lib/text_field';

const CaseContacts = () =>
  <div className="CaseContacts">
    <div>
      <Field
        name="caseContacts"
        component={TextField}
        label="Contacts"
        multiLine
        rows={4}
      />
    </div>
  </div>;

export default CaseContacts;
