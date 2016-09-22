import React from 'react';
import { Field } from 'redux-form';
import Checkbox from '../material_ui_form_lib/checkbox';

const CaseCheckboxes = () =>
  <div className="CaseCheckboxes" style={{ width: '100%' }}>
    <div className="CaseCheckboxes__ChckLeftColumn">
      <div>
        <Field name="CaseCheckboxes__web" component={Checkbox} label="WEB" />
      </div>
      <div>
        <Field name="CaseCheckboxes__email" component={Checkbox} label="EMAIL" />
      </div>
      <div>
        <Field name="CaseCheckboxes__sms" component={Checkbox} label="SMS" />
      </div>
    </div>
    <div className="CaseCheckboxes__ChckMiddleColumn">
      <div>
        <Field name="CaseCheckboxes__nc" component={Checkbox} label="NC" />
      </div>
      <div>
        <Field name="CaseCheckboxes__police" component={Checkbox} label="POLICE" />
      </div>
      <div>
        <Field name="CaseCheckboxes__app" component={Checkbox} label="APP" />
      </div>
    </div>
    <div className="CaseCheckboxes__ChckRightColumn">
      <div>
        <Field name="CaseCheckboxes__pc" component={Checkbox} label="PC" />
      </div>
      <div>
        <Field name="CaseCheckboxes__db" component={Checkbox} label="DB" />
      </div>
      <div>
        <Field name="CaseCheckboxes__sp" component={Checkbox} label="SP" />
      </div>
    </div>
    <div className="CaseCheckboxes__infoColumn">
      <div>
        <Field name="CaseCheckboxes__info" component={Checkbox} label="INFO" />
      </div>
    </div>
  </div>;

export default CaseCheckboxes;
