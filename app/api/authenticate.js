import { SubmissionError } from 'redux-form';
import { compose } from 'ramda';

const toSubmissionError = err =>
  new SubmissionError({ _error: err.message });

export const authenticateCookie = () =>
  new Promise((resolve, reject) =>
    dpd.users.me((payload, err) =>
      (payload
        ? resolve(payload)
        : reject(err || new Error('No payload')))));

export const login = (credentials) =>
  new Promise((resolve, reject) =>
    dpd.users.login(credentials)
    .then(authenticateCookie)
    .then(
      resolve,
      compose(reject, toSubmissionError)));

export const logout = () =>
  new Promise((resolve, reject) =>
    dpd.users.logout()
    .then(resolve, reject));
