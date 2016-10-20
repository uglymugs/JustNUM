import { START_FETCHING, STOP_FETCHING } from '../action_types';

export { loginSuccess, loginFailure, authenticateCookie } from './login';
export { fetchCase, fetchCases, editCase, createCase } from './cases';

export const setFetching = (bool) => {
  if (bool) return { type: START_FETCHING };
  return { type: STOP_FETCHING };
};
