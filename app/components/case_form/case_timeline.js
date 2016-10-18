import React from 'react';
import { Field } from 'redux-form';
import TextField from '../material_ui_form_lib/text_field';

const CaseTimeline = () =>
  <div className="CaseTimeline">
    <div>
      <Field
        name="timeline"
        component={TextField}
        label="Timeline"
        multiLine
        rows={4}
      />
    </div>
  </div>;

export default CaseTimeline;
