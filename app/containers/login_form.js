import React, { PropTypes } from 'react';
import { reduxForm, Field } from 'redux-form';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { loginSuccess, loginFailure } from '../action_creators';
import * as api from '../api';

const containerStyles = {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};


const textField = ({ input, label, meta: { touched, error }, ...custom }) =>
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />;

textField.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
};

const SimpleLogin = ({ handleSubmit }) =>
  <div style={containerStyles}>
    <form
      onSubmit={handleSubmit}
      style={{ width: '500px', display: 'flex', flexDirection: 'column' }}
    >
      <Field
        name="username"
        component={textField}
        label="username"
        hintText="username"
        fullWidth
        type="password"
      />
      <Field
        name="password"
        component={textField}
        label="password"
        hintText="password"
        fullWidth
        type="password"
      />
      <RaisedButton
        label="Login"
        primary
        type="submit"
      />
    </form>
  </div>;

SimpleLogin.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

const Login = reduxForm({
  form: 'login',
  onSubmit: api.login,
  onSubmitSuccess: (payload, dispatch) => dispatch(loginSuccess(payload)),
  onSubmitFail: (error, dispatch) => dispatch(loginFailure(error)),
})(SimpleLogin);


export default Login;
