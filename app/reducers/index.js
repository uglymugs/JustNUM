import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import casesById, * as fromCases from './cases';

// rootReducer :: State -> State
const rootReducer = combineReducers({
  casesById,
  form,
});

export default rootReducer;
export const getCasesById = (state) => state.casesById;
export const getCaseById = (state, id) => fromCases.getCaseById(
  getCasesById(state),
  id
);
