import {
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_FAILURE,
  AUTH_LOGGING_IN } from '../action_types';


const login = (state, payload) =>
  ({
    status: 'loggedIn',
    ...payload,
  });


const loggedOut =
  { status: 'loggedOut' };


const loggingIn =
  { status: 'loggingIn' };


const authReducer =
  (state = loggedOut, action) => {
    switch (action.type) {
      case AUTH_LOGGING_IN:
        return loggingIn;
      case AUTH_LOGIN:
        return login(state, action.payload);
      case AUTH_FAILURE:
      case AUTH_LOGOUT:
        return loggedOut;
      default:
        return state;
    }
  };


export default authReducer;


export const getIsLoggingIn = (state) =>
  state.status === 'loggingIn';


export const getIsLoggedIn = (state) =>
  state.status === 'loggedIn';