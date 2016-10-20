import {
  AUTH_LOGGING_IN,
  AUTH_LOGIN,
  AUTH_FAILURE } from '../action_types';
import * as api from '../api';

export const loginSuccess = (payload) =>
  ({ type: AUTH_LOGIN, payload });

export const loginFailure = (error) =>
  ({ type: AUTH_FAILURE, error });

export const authenticateCookie = () => (dispatch) => {
  dispatch({ type: AUTH_LOGGING_IN });

  api
  .authenticateCookie()
  .then(
    payload => dispatch({ type: AUTH_LOGIN, payload }),
    error => dispatch({ type: AUTH_FAILURE, error }));
};
