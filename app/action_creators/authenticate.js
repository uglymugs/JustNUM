import {
  AUTH_LOGGING_IN,
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_FAILURE } from '../action_types';
import * as api from '../api';

export const loginSuccess = (payload) =>
  ({ type: AUTH_LOGIN, payload });

export const loginFailure = (error) =>
  ({ type: AUTH_FAILURE, error });

export const authenticateCookie = (lastUrl) => (dispatch) => {
  dispatch({ type: AUTH_LOGGING_IN });

  api
  .authenticateCookie()
  .then(
    payload => dispatch({ type: AUTH_LOGIN, payload, lastUrl }),
    error => dispatch({ type: AUTH_FAILURE, error }));
};

export const logout = () => (dispatch) =>
  api
  .logout()
  .then(() => dispatch({ type: AUTH_LOGOUT }));
