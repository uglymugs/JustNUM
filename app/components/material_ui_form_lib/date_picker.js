import React, { PropTypes } from 'react';
import DatePicker from 'material-ui/DatePicker';


const renderDatePicker = ({ label, meta: { touched, error }, ...custom }) => (
  <DatePicker
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    // {...input}
    {...custom}
  />
);

renderDatePicker.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
};

export default renderDatePicker;
