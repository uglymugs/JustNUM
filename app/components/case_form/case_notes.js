import React from 'react';
import { Field } from 'redux-form';
import TextField from '../material_ui_form_lib/text_field';

const CaseNotesCreate = () =>
  <div className="CaseNotesCreate">
    <div>
      <Field
        name="notes"
        component={TextField}
        label="Create a new note"
        multiLine
        rows={6}
      />
    </div>
  </div>;

export default CaseNotesCreate;
