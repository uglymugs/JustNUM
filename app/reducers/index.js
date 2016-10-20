import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import casesById, * as fromCases from './cases.js';
import currentCase from './case.js';
import auth, * as fromAuth from './auth';

// rootReducer :: State -> State
const rootReducer = combineReducers({
  casesById,
  form,
  currentCase,
  auth,
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
