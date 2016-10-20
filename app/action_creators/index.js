import { FETCHING } from '../action_types';

export { loginSuccess, loginFailure, authenticateCookie } from './login';
export { fetchCase, fetchCases, editCase, createCase } from './cases';

export const setFetching = (bool) =>
  ({ type: FETCHING, value: bool });
