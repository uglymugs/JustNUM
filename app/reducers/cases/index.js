import { FETCH_CASES_SUCCESS } from '../../action_types';

// cases :: [Case] -> Action -> [Case]
const casesById = (state = {}, action) => {
  const newState = {};
  switch (action.type) {
    case FETCH_CASES_SUCCESS:
      action.response.forEach(eachCase => {
        newState[eachCase.caseId] = eachCase;
      });
      return newState;
    default:
      return state;
  }
};

export default casesById;

export const getCaseById = (state, id) => state[id];
