import React, { PropTypes } from 'react';
import DatePicker from 'material-ui/DatePicker';

const renderDatePicker = ({ input, hintText }) => (
  <DatePicker
    hintText={hintText}
    onChange={(event, index, value) => input.onChange(value)}
  />
);

renderDatePicker.propTypes = {
  input: PropTypes.string,
  hintText: PropTypes.string,
};

export default renderDatePicker;
