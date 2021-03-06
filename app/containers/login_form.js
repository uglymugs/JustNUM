import React, { PropTypes } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'ramda';
import { red500 } from 'material-ui/styles/colors';
import muiThemeable from 'material-ui/styles/muiThemeable';
import RaisedButton from 'material-ui/RaisedButton';
import renderTextField from '../components/material_ui_form_lib/text_field';
import { loginSuccess, loginFailure } from '../action_creators';
import * as api from '../api';
import validate from '../form_validators/login';

const containerStyles = {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};


const SimpleLogin = ({ error, handleSubmit, muiTheme }) =>
  <div style={containerStyles}>
    <form
      onSubmit={handleSubmit}
      style={{ width: '500px', display: 'flex', flexDirection: 'column' }}
    >
      <Field
        name="username"
        component={renderTextField}
        label="username"
        hintText="username"
        fullWidth
        type="text"
      />
      <Field
        name="password"
        component={renderTextField}
        label="password"
        hintText="password"
        fullWidth
        type="password"
      />
      {error
        ? <div
          style={{
            fontFamily: muiTheme.fontFamily,
            color: red500,
            marginTop: '30px',
          }}
        >Login failed: {error}</div>
        : null}
      <RaisedButton
        label="Login"
        primary
        type="submit"
        style={{ marginTop: '30px' }}
      />
    </form>
  </div>;

SimpleLogin.propTypes = {
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  muiTheme: PropTypes.object.isRequired,
};

const Login = compose(muiThemeable(), reduxForm({
  form: 'login',
  validate,
  onSubmit: api.login,
  onSubmitSuccess: (payload, dispatch) => dispatch(loginSuccess(payload)),
  onSubmitFail: (error, dispatch) => dispatch(loginFailure(error)),
}))(SimpleLogin);


export default Login;
