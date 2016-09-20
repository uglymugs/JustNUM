import React, { PropTypes } from 'react';
import { RadioButtonGroup } from 'material-ui/RadioButton';

const renderRadioGroup = ({ input, ...rest }) => (
  <RadioButtonGroup
    {...input}
    {...rest}
    valueSelected={input.value}
    onChange={(event, value) => input.onChange(value)}
  />
);

renderRadioGroup.propTypes = {
  input: PropTypes.string,
  label: PropTypes.string,
};

export default renderRadioGroup;
