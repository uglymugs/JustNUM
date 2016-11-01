import React from 'react';
import { Field } from 'redux-form';
import Checkbox from '../material_ui_form_lib/checkbox';


const style = {
  grid: {
    height: '100%',
  },
  topRowCell: {
    marginTop: 40,
  },
};

const CaseCheckboxes = () =>
  <div className="grid" style={style.grid}>
    <div>
      <div style={style.topRowCell}><Field name="web" component={Checkbox} label="WEB" /></div>
      <div style={style.topRowCell}><Field name="nc" component={Checkbox} label="NC" /></div>
      <div style={style.topRowCell}><Field name="pc" component={Checkbox} label="PC" /></div>
      <div style={style.topRowCell}>
        <Field name="case_info" component={Checkbox} label="INFO" /></div>
    </div>
    <div>
      <div><Field name="email" component={Checkbox} label="EMAIL" /></div>
      <div><Field name="police" component={Checkbox} label="POLICE" /></div>
      <div><Field name="db" component={Checkbox} label="DB" /></div>
      <div />
    </div>
    <div>
      <div><Field name="sms" component={Checkbox} label="SMS" /></div>
      <div><Field name="app" component={Checkbox} label="APP" /></div>
      <div><Field name="sp" component={Checkbox} label="SP" /></div>
      <div />
    </div>
  </div>;

export default CaseCheckboxes;
