import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import LoginForm from './login_form';
import * as fromReducers from '../reducers';

const SimpleLogin = ({ isLoggingIn }) =>
  (isLoggingIn
    ? null
    : <LoginForm />);

SimpleLogin.propTypes = {
  isLoggingIn: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) =>
  ({
    isLoggingIn: fromReducers.getIsLoggingIn(state),
  });

const Login = connect(mapStateToProps)(SimpleLogin);

export default Login;
