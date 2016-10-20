import { SubmissionError } from 'redux-form';


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
      (err) =>
        reject(new SubmissionError(err.message))));
