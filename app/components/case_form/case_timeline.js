import React from 'react';
import { Field } from 'redux-form';
import { renderTextField } from '../material_ui_form_lib/index';

const CaseTimeline = () =>
  <div className="CaseTimeline">
    <div>
      <Field
        name="CaseTimeline__timeline"
        component={renderTextField}
        label="Timeline"
        multiLine
        rows={4}
      />
    </div>
  </div>;

export default CaseTimeline;
