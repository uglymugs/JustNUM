import React from 'react';
import { Field } from 'redux-form';
import TextField from '../material_ui_form_lib/text_field';

const CaseTimeline = () =>
  <div className="CaseTimeline">
    <div>
      <Field
        name="tasks"
        component={TextField}
        label="tasks"
        multiLine
        rows={4}
      />
    </div>
  </div>;

export default CaseTimeline;
