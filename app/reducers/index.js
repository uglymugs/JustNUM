import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import casesById, * as fromCases from './cases';
import currentCase, * as fromCurrentCase from './case';
import auth, * as fromAuth from './auth';
import fetching from './fetching';
import filter from './filter';
import tasks from './tasks';


// rootReducer :: State -> State
const rootReducer = combineReducers({
  casesById,
  form,
  currentCase,
  auth,
  fetching,
  filter,
  tasks,
});

export default rootReducer;

export const getCasesById = (state) => state.casesById;

export const getCaseById = (state, id) => fromCases.getCaseById(
  getCasesById(state),
  id
);
export const getCurrentCase = (state) => state.currentCase;

export const getIsLoggedIn = (state) =>
  fromAuth.getIsLoggedIn(state.auth);

export const getIsLoggingIn = (state) =>
  fromAuth.getIsLoggingIn(state.auth);

export const isFetching = (state) =>
  state.fetching;

export const getActivatedFilter = (state) =>
  state.filter.activated;

export const getEnteredFilter = (state) =>
  state.filter.entered;

export const getLastUrl = (state) =>
  fromAuth.getLastUrl(state.auth);

export const getUserId = (state) =>
  fromAuth.getUserId(state.auth);

export const getTasks = (state) => state.tasks;

export const getCurrentCaseTasks = state =>
  fromCurrentCase.getTasks(state.currentCase);
