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
  updateActivatedCasesFilter,
  updateActivatedTasksFilter,
  updateEnteredCasesFilter,
  updateEnteredTasksFilter,
  updateCaseTaskFilter,
} from './filter';

export {
  fetchTasks,
} from './tasks';


export const preventRace = (apiPromise, isFetching, setFetching) =>
  (success, failure) =>
    (dispatch, getState) => {
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
