import React from 'react';
import { Field } from 'redux-form';
import { renderCheckbox } from '../material_ui_form_lib/index';

const CaseCheckboxes = () =>
  <div className="CaseCheckboxes">
    <div className="CaseCheckboxes__ChckLeftColumn">
      <div>
        <Field name="CaseCheckboxes__web" component={renderCheckbox} label="WEB" />
      </div>
      <div>
        <Field name="CaseCheckboxes__email" component={renderCheckbox} label="EMAIL" />
      </div>
      <div>
        <Field name="CaseCheckboxes__sms" component={renderCheckbox} label="SMS" />
      </div>
    </div>
    <div className="CaseCheckboxes__ChckMiddleColumn">
      <div>
        <Field name="CaseCheckboxes__nc" component={renderCheckbox} label="NC" />
      </div>
      <div>
        <Field name="CaseCheckboxes__police" component={renderCheckbox} label="POLICE" />
      </div>
      <div>
        <Field name="CaseCheckboxes__app" component={renderCheckbox} label="APP" />
      </div>
    </div>
    <div className="CaseCheckboxes__ChckRightColumn">
      <div>
        <Field name="CaseCheckboxes__pc" component={renderCheckbox} label="PC" />
      </div>
      <div>
        <Field name="CaseCheckboxes__db" component={renderCheckbox} label="DB" />
      </div>
      <div>
        <Field name="CaseCheckboxes__s/p" component={renderCheckbox} label="SP" />
      </div>
    </div>
    <div className="CaseCheckboxes__infoColumn">
      <div>
        <Field name="CaseCheckboxes__info" component={renderCheckbox} label="INFO" />
      </div>
    </div>
  </div>;

export default CaseCheckboxes;
