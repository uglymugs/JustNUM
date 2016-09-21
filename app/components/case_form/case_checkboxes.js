import React from 'react';
import { Field } from 'redux-form';
import { renderCheckbox } from '../material_ui_form_lib/index';

const CaseCheckboxes = () =>
  <div className="CaseCheckboxes">
    <div>
      <Field name="CaseCheckboxes__web" component={renderCheckbox} label="WEB" />
    </div>
    <div>
      <Field name="CaseCheckboxes__email" component={renderCheckbox} label="EMAIL" />
    </div>
    <div>
      <Field name="CaseCheckboxes__sms" component={renderCheckbox} label="SMS" />
    </div>
    <div>
      <Field name="CaseCheckboxes__nc" component={renderCheckbox} label="NC" />
    </div>
    <div>
      <Field name="CaseCheckboxes__police" component={renderCheckbox} label="POLICE" />
    </div>
    <div>
      <Field name="CaseCheckboxes__app" component={renderCheckbox} label="APP" />
    </div>
    <div>
      <Field name="CaseCheckboxes__pc" component={renderCheckbox} label="PC" />
    </div>
    <div>
      <Field name="CaseCheckboxes__db" component={renderCheckbox} label="DB" />
    </div>
    <div>
      <Field name="CaseCheckboxes__s/p" component={renderCheckbox} label="SP" />
    </div>
    <div>
      <Field name="CaseCheckboxes__info" component={renderCheckbox} label="INFO" />
    </div>
  </div>;

export default CaseCheckboxes;
