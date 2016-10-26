import { START_FETCHING, STOP_FETCHING } from '../action_types';

export {
  fetchCase,
  fetchCases,
  submitCaseFormFailure,
  submitCaseFormSuccess,
  clearCaseForm,
} from './cases';

export {
  loginSuccess,
  loginFailure,
  logout,
  authenticateCookie,
} from './authenticate';

export {
  updateActivatedFilter,
  updateEnteredFilter,
} from './filter';

export const setFetching = (bool) => {
  if (bool) return { type: START_FETCHING };
  return { type: STOP_FETCHING };
};
