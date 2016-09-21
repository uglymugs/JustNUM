import React, { PropTypes } from 'react';
import SelectField from 'material-ui/SelectField';

const renderSelectField = ({ input, label, meta: { touched, error }, children }) => (
  <SelectField
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}
  />
);

renderSelectField.propTypes = {
  input: PropTypes.string,
  label: PropTypes.string,
  meta: PropTypes.object,
  children: PropTypes.object,
};

export default renderSelectField;
