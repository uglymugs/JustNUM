import { START_FETCHING, STOP_FETCHING } from '../action_types';
import { isFetching } from '../reducers';

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

export {
  fetchTasks,
} from './tasks';

export const setFetching = (bool) => {
  if (bool) return { type: START_FETCHING };
  return { type: STOP_FETCHING };
};

export const preventingRace = (apiPromise, success, failure) => (dispatch, getState) => {
  const state = getState();
  if (!isFetching(state)) {
    dispatch(setFetching(true));
    return apiPromise.then((res) => {
      success(res);
      dispatch(setFetching(false));
    }, (err) => {
      failure(err);
      dispatch(setFetching(false));
    });
  }
  return Promise.reject(new Error('Already fetching data'));
};
