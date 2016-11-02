import { combineReducers } from 'redux';
import {
  FETCH_CASE_SUCCESS,
  FETCH_CASE_FAILURE,
  DESELECT_CASE,
} from '../action_types';

// cases :: [Case] -> Action -> [Case]
const caseData = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CASE_SUCCESS:
      return action.response;
    case FETCH_CASE_FAILURE:
      return {};
    case DESELECT_CASE:
      return action.response;
    default:
      return state;
  }
};

const error = (state = null, action) => {
  switch (action.type) {
    case FETCH_CASE_FAILURE:
      return action.err;
    case FETCH_CASE_SUCCESS:
      return null;
    default:
      return state;
  }
};

const currentCase = combineReducers({
  caseData,
  error,
});

export default currentCase;

export const getTasks = (state) =>
  state.caseData.tasks;

export const getNotes = (state) =>
  state.caseData.notes;

export const getCaseData = (state) => state.caseData;

export const getFetchCaseError = (state) => state.error;
