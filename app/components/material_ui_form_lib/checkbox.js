import React, { PropTypes } from 'react';
import UICheckbox from 'material-ui/Checkbox';

const Checkbox = ({ input: { value, onChange }, label }) =>
  <UICheckbox
    label={label}
    checked={!!value}
    onCheck={onChange}
  />;

Checkbox.propTypes = {
  input: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
    onChange: PropTypes.func.isRequired,
  }).isRequired,
  label: PropTypes.string.isRequired,
};

export default Checkbox;
