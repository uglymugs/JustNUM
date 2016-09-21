import React, { PropTypes } from 'react';
import { RadioButtonGroup as UIRadioButtonGroup } from 'material-ui/RadioButton';

const RadioButtonGroup = ({ input, ...rest }) => (
  <UIRadioButtonGroup
    {...input}
    {...rest}
    valueSelected={input.value}
    onChange={(event, value) => input.onChange(value)}
  />
);

RadioButtonGroup.propTypes = {
  input: PropTypes.string,
  label: PropTypes.string,
};

export default RadioButtonGroup;
