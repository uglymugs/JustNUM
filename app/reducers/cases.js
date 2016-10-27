import { combineReducers } from 'redux';
import {
  FETCH_CASES_SUCCESS,
  EDIT_CASE_SUCCESS,
  STOP_FETCHING_CASES,
  START_FETCHING_CASES,
} from '../action_types';

const fetching = (state = false, action) => {
  switch (action.type) {
    case START_FETCHING_CASES:
      return true;
    case STOP_FETCHING_CASES:
      return false;
    default:
      return state;
  }
};

// cases :: [Case] -> Action -> [Case]
const casesById = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CASES_SUCCESS:
      return action.response;
    case EDIT_CASE_SUCCESS:
      return {
        ...state,
        [action.response.caseId]: action.response,
      };
    default:
      return state;
  }
};

const cases = combineReducers({
  casesById,
  fetching,
});

export default cases;

export const getCaseById = (state, id) => state.casesById[id];
export const isFetching = (state) => state.fetching;
