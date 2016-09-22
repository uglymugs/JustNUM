import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

// const style = {
//   margin: '12px',
//   backgroundColor: '#5E7B8D',
// };

const FormButton = (props) =>
  <RaisedButton {...props} />;

FormButton.propTypes = {
  style: PropTypes.object,
  label: PropTypes.string.isRequired,
};

export default FormButton;
