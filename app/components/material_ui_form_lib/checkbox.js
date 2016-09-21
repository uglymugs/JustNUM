import React, { PropTypes } from 'react';
import Checkbox from 'material-ui/Checkbox';

const renderCheckbox = ({ input, label }) => (
  <Checkbox
    label={label}
    checked={input.value}
    onCheck={input.onChange}
    labelStyle={{ color: '#5E7B8D' }}
  />
);

renderCheckbox.propTypes = {
  input: PropTypes.string,
  label: PropTypes.string,
};

export default renderCheckbox;
