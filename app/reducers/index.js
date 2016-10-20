import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import auth, * as fromAuth from './auth';
import casesById, * as fromCases from './cases';

// rootReducer :: State -> State
const rootReducer = combineReducers({
  casesById,
  form,
  auth,
});

export default rootReducer;

export const getCasesById = (state) => state.casesById;

export const getCaseById = (state, id) => fromCases.getCaseById(
  getCasesById(state),
  id
);

export const getIsLoggedIn = (state) =>
  fromAuth.getIsLoggedIn(state.auth);

export const getIsLoggingIn = (state) =>
  fromAuth.getIsLoggingIn(state.auth);
