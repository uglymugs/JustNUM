import React from 'react';
import { Field } from 'redux-form';
import Checkbox from '../material_ui_form_lib/checkbox';

const CaseCheckboxes = () =>
  <div className="CaseCheckboxes" style={{ width: '100%' }}>
    <div className="CaseCheckboxes__ChckLeftColumn">
      <div>
        <Field name="caseWeb" component={Checkbox} label="WEB" />
      </div>
      <div>
        <Field name="caseEmail" component={Checkbox} label="EMAIL" />
      </div>
      <div>
        <Field name="caseSms" component={Checkbox} label="SMS" />
      </div>
    </div>
    <div className="CaseCheckboxes__ChckMiddleColumn">
      <div>
        <Field name="caseNc" component={Checkbox} label="NC" />
      </div>
      <div>
        <Field name="casePolice" component={Checkbox} label="POLICE" />
      </div>
      <div>
        <Field name="caseApp" component={Checkbox} label="APP" />
      </div>
    </div>
    <div className="CaseCheckboxes__ChckRightColumn">
      <div>
        <Field name="casePc" component={Checkbox} label="PC" />
      </div>
      <div>
        <Field name="caseDb" component={Checkbox} label="DB" />
      </div>
      <div>
        <Field name="caseSp" component={Checkbox} label="SP" />
      </div>
    </div>
    <div className="CaseCheckboxes__infoColumn">
      <div>
        <Field name="case_info" component={Checkbox} label="INFO" />
      </div>
    </div>
  </div>;

export default CaseCheckboxes;
