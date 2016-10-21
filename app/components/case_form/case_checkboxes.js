import React from 'react';
import { Field } from 'redux-form';
import Checkbox from '../material_ui_form_lib/checkbox';


const style = {
  table: {
    width: '100%',
    height: '100%',
  },
  td: {
    paddingTop: '10px',
  },
};


const CaseCheckboxes = () =>
  <table style={style.table}>
    <tbody>
      <tr>
        <td style={style.td}><Field name="web" component={Checkbox} label="WEB" /></td>
        <td style={style.td}><Field name="nc" component={Checkbox} label="NC" /></td>
        <td style={style.td}><Field name="pc" component={Checkbox} label="PC" /></td>
        <td style={style.td}><Field name="case_info" component={Checkbox} label="INFO" /></td>
      </tr>
      <tr style={style.tr}>
        <td style={style.td}><Field name="email" component={Checkbox} label="EMAIL" /></td>
        <td style={style.td}><Field name="police" component={Checkbox} label="POLICE" /></td>
        <td style={style.td}><Field name="db" component={Checkbox} label="DB" /></td>
      </tr>
      <tr style={style.tr}>
        <td style={style.td}><Field name="sms" component={Checkbox} label="SMS" /></td>
        <td style={style.td}><Field name="app" component={Checkbox} label="APP" /></td>
        <td style={style.td}><Field name="sp" component={Checkbox} label="SP" /></td>
      </tr>
    </tbody>
  </table>;

export default CaseCheckboxes;
