import React, { PropTypes } from 'react';
import UIDatePicker from 'material-ui/DatePicker';

const DatePicker = ({ input, hintText }) => (
  <UIDatePicker
    hintText={hintText}
    onChange={(event, index, value) => input.onChange(value)}
  />
);

DatePicker.propTypes = {
  input: PropTypes.string,
  hintText: PropTypes.string,
};

export default DatePicker;
