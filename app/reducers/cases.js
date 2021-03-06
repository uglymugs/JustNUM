import { combineReducers } from 'redux';
import {
  FETCH_CASES_SUCCESS,
  FETCH_CASES_FAILURE,
  EDIT_CASE_SUCCESS,
  STOP_FETCHING_CASES,
  START_FETCHING_CASES,
  REQUEST_NEW_CASE_FILTER,
  ACTIVATE_NEW_CASE_FILTER,
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
    case FETCH_CASES_FAILURE:
      return {};
    case EDIT_CASE_SUCCESS:
      return {
        ...state,
        [action.response.caseId]: action.response,
      };
    default:
      return state;
  }
};

const error = (state = null, action) => {
  switch (action.type) {
    case FETCH_CASES_FAILURE:
      return action.err;
    case FETCH_CASES_SUCCESS:
      return null;
    default:
      return state;
  }
};

const filterDefaults = {
  entered: '',
  activated: '',
};

const filter = (state = filterDefaults, action) => {
  switch (action.type) {
    case REQUEST_NEW_CASE_FILTER:
      return {
        ...state,
        entered: action.filter,
      };
    case ACTIVATE_NEW_CASE_FILTER:
      return {
        ...state,
        activated: action.filter,
      };
    default:
      return state;
  }
};


const cases = combineReducers({
  casesById,
  fetching,
  error,
  filter,
});

export default cases;

export const getCaseById = (state, id) => state.casesById[id];
export const getCasesById = (state) => state.casesById;
export const isFetching = (state) => state.fetching;
export const getEnteredFilter = (state) => state.filter.entered;
export const getActivatedFilter = (state) => state.filter.activated;
export const getFetchCasesError = (state) => state.error;
