import React from 'react';
import { Field } from 'redux-form';
import { renderTextField } from './material_ui_form/index';

const CaseContacts = () =>
  <div className="case_contacts">
    <div>
      <Field
        name="contacts"
        component={renderTextField}
        label="Contacts"
        multiLine
        rows={4}
      />
    </div>
  </div>;

export default CaseContacts;
