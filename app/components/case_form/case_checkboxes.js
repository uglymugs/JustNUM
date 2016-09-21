import React from 'react';
import { Field } from 'redux-form';
import Checkbox from '../material_ui_form_lib/checkbox';

const CaseCheckboxes = () =>
  <div className="CaseCheckboxes">
    <div>
      <Field name="CaseCheckboxes__web" component={Checkbox} label="WEB" />
    </div>
    <div>
      <Field name="CaseCheckboxes__email" component={Checkbox} label="EMAIL" />
    </div>
    <div>
      <Field name="CaseCheckboxes__sms" component={Checkbox} label="SMS" />
    </div>
    <div>
      <Field name="CaseCheckboxes__nc" component={Checkbox} label="NC" />
    </div>
    <div>
      <Field name="CaseCheckboxes__police" component={Checkbox} label="POLICE" />
    </div>
    <div>
      <Field name="CaseCheckboxes__app" component={Checkbox} label="APP" />
    </div>
    <div>
      <Field name="CaseCheckboxes__pc" component={Checkbox} label="PC" />
    </div>
    <div>
      <Field name="CaseCheckboxes__db" component={Checkbox} label="DB" />
    </div>
    <div>
      <Field name="CaseCheckboxes__s/p" component={Checkbox} label="SP" />
    </div>
    <div>
      <Field name="CaseCheckboxes__info" component={Checkbox} label="INFO" />
    </div>
  </div>;

export default CaseCheckboxes;
