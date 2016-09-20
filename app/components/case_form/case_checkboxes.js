import React from 'react';
import { Field } from 'redux-form';
import { renderCheckbox } from '../material_ui_form_lib/index';

const CaseCheckboxes = () =>
  <div className="case_checkboxes">
    <div>
      <Field name="web" component={renderCheckbox} label="WEB" />
    </div>
    <div>
      <Field name="email" component={renderCheckbox} label="EMAIL" />
    </div>
    <div>
      <Field name="sms" component={renderCheckbox} label="SMS" />
    </div>
    <div>
      <Field name="nc" component={renderCheckbox} label="NC" />
    </div>
    <div>
      <Field name="police" component={renderCheckbox} label="POLICE" />
    </div>
    <div>
      <Field name="app" component={renderCheckbox} label="APP" />
    </div>
    <div>
      <Field name="pc" component={renderCheckbox} label="PC" />
    </div>
    <div>
      <Field name="db" component={renderCheckbox} label="DB" />
    </div>
    <div>
      <Field name="s/p" component={renderCheckbox} label="SP" />
    </div>
    <div>
      <Field name="info" component={renderCheckbox} label="INFO" />
    </div>
  </div>;

export default CaseCheckboxes;
