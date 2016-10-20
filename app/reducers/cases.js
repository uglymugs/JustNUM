import {
  FETCH_CASES_SUCCESS,
  EDIT_CASE_SUCCESS,
} from '../action_types';

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

export default casesById;

export const getCaseById = (state, id) => state[id];
