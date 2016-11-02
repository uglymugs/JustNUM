import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import cases, * as fromCases from './cases';
import currentCase, * as fromCurrentCase from './case';
import caseTaskFilter, * as fromCaseTaskFilter from './case_task_filter';
import auth, * as fromAuth from './auth';
import tasks, * as fromTasks from './tasks';


// rootReducer :: State -> State
const rootReducer = combineReducers({
  cases,
  form,
  currentCase,
  auth,
  tasks,
  caseTaskFilter,
});

export default rootReducer;

export const getCasesById = (state) =>
  fromCases.getCasesById(state.cases);

export const getCaseById = (state, id) =>
  fromCases.getCaseById(state.cases, id);

export const getFetchCasesError = (state) =>
  fromCases.getFetchCasesError(state.cases);

export const getCurrentCase = (state) =>
  fromCurrentCase.getCaseData(state.currentCase);

export const getIsLoggedIn = (state) =>
  fromAuth.getIsLoggedIn(state.auth);

export const getIsLoggingIn = (state) =>
  fromAuth.getIsLoggingIn(state.auth);

export const isFetchingCases = (state) =>
  fromCases.isFetching(state.cases);
export const isFetchingTasks = (state) =>
  fromTasks.isFetching(state.tasks);

export const getActivatedCasesFilter = (state) =>
  fromCases.getActivatedFilter(state.cases);

export const getEnteredCasesFilter = (state) =>
  fromCases.getEnteredFilter(state.cases);

export const getActivatedTasksFilter = (state) =>
  fromTasks.getActivatedFilter(state.tasks);

export const getEnteredTasksFilter = (state) =>
  fromTasks.getEnteredFilter(state.tasks);

export const getLastUrl = (state) =>
  fromAuth.getLastUrl(state.auth);

export const getUserId = (state) =>
  fromAuth.getUserId(state.auth);

export const getFirstName = (state) =>
  fromAuth.getFirstName(state.auth);

export const getLastName = (state) =>
  fromAuth.getLastName(state.auth);

export const getCurrentCaseTasks = state =>
  fromCurrentCase.getTasks(state.currentCase);

export const getCurrentCaseNotes = state =>
  fromCurrentCase.getNotes(state.currentCase);

export const getFetchCaseError = state =>
  fromCurrentCase.getFetchCaseError(state.currentCase);

export const getTasks = (state) =>
  fromTasks.getTasksById(state.tasks);

export const getCaseTaskFilter = (state) =>
  fromCaseTaskFilter.getFilter(state.caseTaskFilter);

export const getCaseTaskFilterFn = (state) =>
  fromCaseTaskFilter.getFilterFn(state.caseTaskFilter);
