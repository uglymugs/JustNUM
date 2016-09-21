import React from 'react';
import { Field } from 'redux-form';
import { renderTextField } from '../material_ui_form_lib/index';

const CaseContacts = () =>
  <div className="CaseContacts">
    <div>
      <Field
        name="CaseContacts__contacts"
        component={renderTextField}
        label="Contacts"
        multiLine
        rows={4}
      />
    </div>
  </div>;

export default CaseContacts;
