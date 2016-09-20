import React from 'react';
import { Field } from 'redux-form';
import { renderTextField } from '../material_ui_form_lib/index';

const CaseNotesCreate = () =>
  <div className="case_notes_create">
    <div>
      <Field
        name="notes_create"
        component={renderTextField}
        label="Create a new note"
        multiLine
        rows={6}
      />
    </div>
  </div>;

export default CaseNotesCreate;
