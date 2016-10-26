import React, { PropTypes } from 'react';
import DatePicker from 'material-ui/DatePicker';
import { omit } from 'ramda';


const renderDatePicker = ({ input, customValue, label, meta: { touched, error }, ...custom }) => (
  <DatePicker
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    value={customValue}
    {...omit(['value'], input)}
    {...custom}
  />
);

renderDatePicker.propTypes = {
  customValue: PropTypes.object,
  input: PropTypes.object,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
};

export default renderDatePicker;
