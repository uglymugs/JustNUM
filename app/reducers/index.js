import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import cases, * as fromCases from './cases';
import currentCase from './case';
import auth, * as fromAuth from './auth';
import filter from './filter';
import tasks, * as fromTasks from './tasks';


// rootReducer :: State -> State
const rootReducer = combineReducers({
  cases,
  form,
  currentCase,
  auth,
  filter,
  tasks,
});

export default rootReducer;

export const getCasesById = (state) => state.cases.casesById;

export const getCaseById = (state, id) => fromCases.getCaseById(
  state.cases,
  id
);
export const getCurrentCase = (state) => state.currentCase;

export const getIsLoggedIn = (state) =>
  fromAuth.getIsLoggedIn(state.auth);

export const getIsLoggingIn = (state) =>
  fromAuth.getIsLoggingIn(state.auth);

export const isFetchingCases = (state) => fromCases.isFetching(state.cases);
export const isFetchingTasks = (state) => fromTasks.isFetching(state.tasks);

export const getActivatedFilter = (state) =>
  state.filter.activated;

export const getEnteredFilter = (state) =>
  state.filter.entered;

export const getLastUrl = (state) =>
  fromAuth.getLastUrl(state.auth);

export const getUserId = (state) =>
  fromAuth.getUserId(state.auth);

export const getTasks = (state) => state.tasks.tasksById;
